"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useScrollReveal({
  threshold = 0.18,
  rootMargin = "0px 0px -12% 0px",
}: UseScrollRevealOptions = {}) {
  const elementRef = useRef<HTMLElement | null>(null);
  const [alreadyVisible, setAlreadyVisible] = useState(false);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin,
  });

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      elementRef.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  useIsomorphicLayoutEffect(() => {
    let resolved = false;
    let scrollTimeoutId: number | null = null;
    let onScroll: (() => void) | null = null;

    // Marks that client React is alive so scroll-reveal elements may start
    // hidden and animate in. This is done here — not via an inline script or
    // SSR — so that when React never runs (e.g. a browser Back navigation
    // from a 404 page, where the restored document does not hydrate) the
    // class is absent and every reveal element stays visible by default.
    // All reveal sections sit below the full-height Hero, so hiding them
    // here (before paint, via a layout effect) causes no visible flash.
    document.documentElement.classList.add("reveal-ready");

    const stopScrollWatch = () => {
      if (scrollTimeoutId !== null) {
        window.clearTimeout(scrollTimeoutId);
        scrollTimeoutId = null;
      }
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
        onScroll = null;
      }
    };

    // Element top inside the upper portion of the viewport means it
    // has already been (or is currently) shown. Skip the entry
    // animation so it stays visible immediately on hard reload, scroll
    // restoration, bfcache restore, and App Router back navigation.
    const measure = () => {
      if (resolved) return true;
      const el = elementRef.current;
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.3) {
        resolved = true;
        setAlreadyVisible(true);
        stopScrollWatch();
        return true;
      }
      return false;
    };

    // Brief scroll-event window after mount or after a navigation
    // event, in case the browser restores scroll position after the
    // first paint. Short enough that the user's normal scrolling
    // doesn't trigger it (IntersectionObserver handles that case).
    const armScrollWatch = () => {
      if (resolved) return;
      stopScrollWatch();
      onScroll = () => measure();
      window.addEventListener("scroll", onScroll, { passive: true });
      scrollTimeoutId = window.setTimeout(stopScrollWatch, 500);
    };

    const remeasure = () => {
      if (measure()) return;
      // Re-measure on the next two frames to catch deferred scroll
      // restoration that runs after the navigation event.
      requestAnimationFrame(() => {
        if (measure()) return;
        requestAnimationFrame(() => measure());
      });
      armScrollWatch();
    };

    remeasure();

    // pageshow fires on initial load AND on bfcache restore.
    // popstate fires on browser back/forward — even when the component
    // tree is preserved across the navigation (so useEffect would not
    // re-run on its own).
    const onPageShow = () => remeasure();
    const onPopState = () => remeasure();
    const onVisibility = () => {
      if (document.visibilityState === "visible") remeasure();
    };

    window.addEventListener("pageshow", onPageShow);
    window.addEventListener("popstate", onPopState);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      resolved = true;
      stopScrollWatch();
      window.removeEventListener("pageshow", onPageShow);
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return { ref: setRefs, inView, alreadyVisible };
}
