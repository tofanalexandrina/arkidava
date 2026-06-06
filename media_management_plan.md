# Media Management Plan

## Collections

We replaced the generic media collection with dedicated ones to keep things fast and organized:

- **Images**: Automatically resizes photos (thumbnail, card, hero) using Sharp. Requires `alt` text.
- **Videos**: For MP4/WebM streaming. Includes a `posterImage` field to show an image before the video plays.
- **Categories**:
  - `type` choice (Residential vs. Industrial).
  - `featuredImage` for the category card.
  - `gallery` field to add multiple photos/videos.
- **Projects**:
  - `featuredImage` for the project card.
  - `gallery` for the project photos/videos.

## How Galleries Work

Both Categories and Projects use a `relationship` field for their galleries allowing both images and videos.

- You can multi-select images and videos.
- You can drag to reorder them in the Payload admin UI.
- **Reuse**: Upload a photo once to the `Images` collection. You can reuse that exact same photo everywhere: in a Category gallery, a Project gallery, and as a Project `featuredImage`.

## Future: Cloud Storage (Cloudflare R2)

Local storage is just for development. For production:

- We will use the `@payloadcms/storage-s3` plugin.
- Payload will upload files directly to a Cloudflare R2 bucket and save only the URL in the database.
- Next.js will read the R2 URL from Payload's API and serve the media directly from the cloud CDN.
