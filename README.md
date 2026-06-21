This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Payload CMS: Generating TypeScript Types

If your project uses Payload CMS, generate TypeScript types for your collections and globals with the following command:

```bash
npx payload generate:types
```

This command introspects your Payload configuration and emits strongly-typed definitions you can import across your frontend and backend code, improving developer experience and reducing runtime errors.

link to payload admin page:
http://localhost:3000/admin

TODO:
### 1. Projects Section (Homepage)
*   **Context:** A section on the main page to showcase recent or featured work.
*   **Details:** You'll need to create a new component `ProjectsSection.tsx` inside your sections folder. This component should fetch a few items from your Payload `Projects` collection and display them as a grid or a horizontal scrollable list.
*   **Tips:** 
    *   Since you're using Next.js App Router, make this a **Server Component**. You can fetch data directly from the Payload Local API (e.g., `const payload = await getPayload(...)`) without needing an external HTTP request.
    *   Use the Next.js `<Image />` component for project thumbnails, and utilize `object-cover` in Tailwind for clean cropping.

### 2. Servicii (Services) Section (Homepage)
*   **Context:** An area explaining the core offerings (e.g., custom furniture, interior design, installation).
*   **Details:** Create a `Services.tsx` component in sections. This is usually a static layout unless your services change frequently.
*   **Tips:** 
    *   A classic pattern is a 3-column grid (`grid-cols-1 md:grid-cols-3`) where each column has a sleek SVG icon, a bold title, and a brief descriptive text.
    *   Stick to your `text-zinc-500` and `text-zinc-900` typography to maintain the refined branding seen in your Hero section.

### 3. Despre noi (About Us) Section (Homepage)
*   **Context:** A brief history/mission of Arkidava Mobili to build trust with the customer.
*   **Details:** Create an `About.tsx` component. It should likely have a 2-column layout on desktop: a high-quality workshop or team image on one side, and text/mission statement on the other.
*   **Tips:** 
    *   Use Tailwind's `flex-col lg:flex-row` pattern for responsiveness.
    *   Use the `text-balance` utility on the main typography so paragraphs don't leave awkward single words on the last line.

### 4. Contact Section (Homepage / or Footer)
*   **Context:** Provides users with a clear way to get in touch (email, phone, address).
*   **Details:** Can be a standalone section (`Contact.tsx`) just above the footer, or an expanded footer. Should include clickable links for phone and email.
*   **Tips:** 
    *   For the phone number, use the `href="tel:+407..."` protocol. 
    *   For email, use `href="mailto:contact@..."`. 
    *   If you decide to add a contact form later, you will need to mark the form component with `"use client"` or use Next.js Server Actions to handle the form submission cleanly.

### 5. Categories Page (`/categories`)
*   **Context:** A dedicated hub displaying high-level categories (e.g., Residential vs. Industrial).
*   **Details:** You will update your existing page.tsx.
    *   **Title:** A clean hero block with the word "Categorii".
    *   **List of Cards:** Fetch data from your Payload `Categories` collection.
    *   **Selector:** A toggle or tab system to switch between "Industrial" and "Residential".
*   **Tips:** 
    *   To implement the "Selector" smoothly without page reloads, extract the list and the buttons into a **Client Component** (`"use client"`), pass the fetched categories as a prop, and use React `useState` to filter which cards are displayed based on the selected tab.

### 6. Category Page (`/categories/[slug]`)
*   **Context:** A dynamic detail page for a specific category (e.g., viewing all works inside "Bucătării").
*   **Details:** You'll need to create a dynamic route: `app/(frontend)/categories/[slug]/page.tsx`. It needs to display the category title, a large media gallery, and a navigation link to hop to a different category easily.
*   **Tips:** 
    *   Fetch the specific category based on the URL `slug` parameter via Payload.
    *   **Media Gallery:** Use CSS Grid (`grid cols-2 md:grid-cols-3 gap-4`) for a masonry or square-grid layout. 
    *   **Navigation:** At the bottom of the page, add a "Vezi și: [Cealaltă categorie]" link to keep users browsing.

### 7. Project Page (`/projects/[slug]`)
*   **Context:** A deep dive into an individual project (e.g., "Apartament X").
*   **Details:** Create a dynamic route: `app/(frontend)/projects/[slug]/page.tsx`. This should pull a specific item from the `Projects` collection. It usually includes project metadata (Year, Location, Materials), a descriptive text, and a carousel/grid of photos.
*   **Tips:** 
    *   Since building the same gallery for Category and Project pages might be redundant, create a reusable `<MediaGallery items={...} />` component.
    *   If you want the pages to load instantly, use Next.js `generateStaticParams()` to pre-render the pages for all existing project slugs at build time.