import type { CollectionConfig } from 'payload'

export const Videos: CollectionConfig = {
  slug: 'videos',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media/videos',
    mimeTypes: ['video/mp4', 'video/webm'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'posterImage',
      type: 'upload',
      relationTo: 'images',
      admin: {
        description: 'Image displayed before the video plays',
      },
    },
  ],
}
