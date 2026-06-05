# Media Management Architecture

Separating Images and Videos into their own collections ensures optimal performance (image resizing works without breaking videos) and provides explicit control for art direction across the presentation website.

## Steps

1. **Create `Images` Collection**
   - Replace the generic `Media` collection.
   - Define specific `imageSizes` (e.g., `thumbnail`, `card`, `hero`). Payload will automatically crop/resize images on upload using Sharp.
   - Enforce explicit `alt` text for SEO.

2. **Create `Videos` Collection**
   - Restrict uploads to `video/mp4`, `video/webm`.
   - Add a `posterImage` field (relationship to `Images`) to serve as the loading cover/thumbnail while the 20-60s video buffers.

3. **Configure Categories (`collections/Categories.ts`)**
   - Use an explicitly chosen `featuredImage` (relation to `Images`) rather than a random project photo. This guarantees the 'Kitchen' card always looks intentional and perfectly framed.

4. **Configure Projects (`collections/Projects.ts`)**
   - Add `featuredImage` (relation to `Images`) for the project listing cards.
   - Add a `gallery` field. Instead of simple relationships, use an `array` with a `type` sub-field (radio: `image` or `video`). This lets you build a mixed-media gallery where you control the precise swipe order.

5. **Cloudflare R2 Integration (`payload.config.ts`)**
   - Install and configure `@payloadcms/storage-s3`. Local storage will quickly fail with high-res galleries and 1-minute video showcases. Offloading this ensures fast Vercel/Next.js response times.

## Verification

1. Upload a heavy 4K image → Verify Payload generates the smaller requested sizes.
2. Upload an MP4 → Verify it's restricted to `Videos` collection and allows a poster image link.
3. Re-seed local DB and execute the Payload admin panel to ensure galleries accept mixed media and support drag-and-drop reordering.

## Decisions & Scope

- Explicit control is favored over random programmatic selection (best practice for premium portfolio sites).
- Images and Videos are distinct collections because videos don't require Sharp resizing and often need fallback poster images.
- External R2 storage is mandatory for video delivery; local storage is only strictly for initial dev tests.

## Further Considerations

1. **Video Autoplay vs Controls**: For project galleries, should the videos autoplay when swiped into view, or will they have native play buttons? _(Note: For a website to autoplay a video, the video file must be muted)_.
2. **Next.js Optimization**: In the frontend, Next's `<Image>` requires explicit domains in `next.config.ts`. Once R2 is set up, its domain must be whitelisted.
