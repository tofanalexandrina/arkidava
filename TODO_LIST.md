# Delivery Tracker

## Legend

Status:

- DONE: implemented and integrated
- PARTIAL: implemented but not final scope
- TODO: not implemented

Priority (3 levels only):

- HIGH: critical path / must be delivered first
- MEDIUM: important but can start after HIGH tasks
- LOW: polish or non-blocking improvements

Task ID format:

- TK-01, TK-02, TK-03 ...

## Tasks

### TK-01 - Redo Portfolio Cards (Navigation, 3 Visible)

- Status: IN PROGRESS (MAX)
- Priority: HIGH

<details>
<summary>Details</summary>

- Rebuild the card group into a carousel/slider that shows only 3 cards at a time.
- Add previous/next navigation between cards.
- Keep responsive behavior (fewer cards visible on smaller breakpoints).
- Preserve existing card visuals, hover, and scroll-reveal animation.

</details>

### TK-02 - Homepage Projects Section

- Status: IN PROGRESS (MAX)
- Priority: HIGH

<details>
<summary>Details</summary>

- Add the missing Projects section to the homepage.
- Reuse the redone card/carousel UI from TK-01.
- Link each card to its project detail route.

</details>

### TK-03 - Projects Route (/projects)

- Status: TODO
- Priority: HIGH

<details>
<summary>Details</summary>

- Build projects index route with all project cards.
- Add filtering by related category/type.
- Link each card to project detail route.

</details>

### TK-04 - Category Detail (/portfolio/category/[slug])

- Status: TODO
- Priority: MEDIUM

<details>
<summary>Details</summary>

- Create dynamic route with slug lookup in Payload.
- Render category title + media gallery.
- Add navigation to another category at page end.

</details>

### TK-05 - Project Detail (/projects/[slug])

- Status: TODO
- Priority: MEDIUM

<details>
<summary>Details</summary>

- Create dynamic route with slug lookup in Payload projects.
- Render project metadata + gallery.
- Optional optimization: generateStaticParams.

</details>

### TK-06 - Connect Homepage Sections to CMS

- Status: TODO
- Priority: MEDIUM

<details>
<summary>Details</summary>

- Replace static/mock arrays in the Portfolio and Projects homepage sections with Payload-backed data.
- Prefer Server Component fetch from the local Payload API.
- Reuse gallery/card UI where possible.

</details>

## Bugs

No open bugs. Add new bugs here as they are found.

## Priority Queue

1. TK-01 - redo portfolio cards (carousel, 3 visible, navigation)
2. TK-02 - add homepage projects section
3. TK-03 - implement /projects
4. TK-04 - implement /portfolio/category/[slug]
5. TK-05 - implement /projects/[slug]
6. TK-06 - connect homepage portfolio & projects sections to CMS

## Done

### Portfolio Placeholder Page

- Summary: Delivered placeholder /portfolio route with loading skeleton flow.
- Status: DONE
- By: Max

### Payload Categories Fetch Blueprint

- Summary: Added reusable Payload client, category queries, and serializer pattern.
- Status: DONE
- By: Max

### Portfolio Page

- Summary: Implemented portfolio page structure with Residential/Industrial card sections.
- Status: DONE
- By: Max

### Contact Section

- Summary: Added clickable phone/email contact links in footer.
- Status: DONE
- By: Alexandrina

### Categories Page

- Summary: Implemented categories listing page with type-based filtering flow.
- Status: DONE
- By: Alexandrina

### Category Page

- Summary: Implemented dynamic category detail route with gallery/navigation structure.
- Status: DONE
- By: Alexandrina

### BUG-01 - Services Section Images Don't Load on Mobile

- Summary: Fixed collapsed image box on mobile (`flex-1` → `w-full md:flex-1`).
- Status: DONE

### BUG-02 - Menu Button Broken After Returning From 404 Page

- Summary: Rebuilt mobile menu as a CSS-only checkbox toggle so it works without React hydration.
- Status: DONE
