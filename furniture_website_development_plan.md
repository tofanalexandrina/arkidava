# Furniture Presentation Website — Development Plan

## Project Goal

Build a modern presentation website for a custom furniture company.

The website will:
- showcase completed projects
- categorize projects
- allow admins to upload/manage projects
- visually communicate professionalism and craftsmanship
- generate leads/contact requests

The frontend UI/UX is fully custom-built.

The CMS is used ONLY for:
- content management
- media uploads
- categories/projects management
- admin access

---

# Recommended Stack

## Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion (optional)
- GSAP (optional)

---

## Backend / CMS
- Payload CMS

---

## Database
- PostgreSQL

---

## Media Storage
Development:
- Local storage

Production:
- Cloudflare R2

---

# High-Level Architecture

## Frontend Responsibilities
- UI/UX
- animations
- routing
- responsive layouts
- galleries
- transitions
- SEO rendering
- project presentation

---

## Payload CMS Responsibilities
- admin dashboard
- project management
- categories management
- media uploads
- API endpoints
- database interaction

---

## Database Responsibilities
Stores:
- projects
- categories
- admin users
- media metadata
- relationships

The database DOES NOT usually store image files directly.

---

## Media Storage Responsibilities
Stores:
- uploaded image files
- gallery assets
- thumbnails

Payload stores references to these files in PostgreSQL.

---

# Content Structure

## Categories
Examples:
- Kitchen
- Bathroom
- Living Room
- Bedroom
- Terrace
- Restaurant
- Bar
- Office

Fields:
- title
- slug
- type (home / industrial)

---

## Projects
Fields:
- title
- slug
- description
- category relation
- featured image
- gallery
- project type
- featured boolean
- optional metadata

---

## Media
Upload-enabled collection.

Stores:
- uploaded files
- image metadata
- generated sizes/thumbnails

---

# DEVELOPMENT PHASES

---

# PHASE 1 — Project Foundation

## Step 1 — Create Repository
Create Git repository.

Suggested:
- GitHub
- GitLab

---

## Step 2 — Create Frontend
Initialize Next.js project.

Install:
- Tailwind CSS
- ESLint
- Prettier

Verify:
- app runs locally

---

## Step 3 — Create Payload CMS Project
Initialize Payload project.

Verify:
- admin panel runs locally

---

## Step 4 — Setup PostgreSQL
Use:
- Docker PostgreSQL container
OR
- local PostgreSQL installation

Verify:
- database connection works

---

## Step 5 — Connect Payload to PostgreSQL
Configure environment variables.

Verify:
- Payload can read/write database data

---

# PHASE 2 — Configure CMS Structure

## Step 6 — Create Categories Collection

Fields:
- title
- slug
- type

Verify:
- categories can be created in admin panel

---

## Step 7 — Create Projects Collection

Fields:
- title
- slug
- description
- category relation
- gallery
- featured image
- project type
- featured boolean

Verify:
- projects can be created

---

## Step 8 — Create Media Collection

Enable uploads.

Configure:
- upload folder
- allowed image types
- image sizes

Verify:
- images upload correctly

---

## Step 9 — Create Admin User

Create:
- admin account

Verify:
- admin authentication works

---

## Step 10 — Test CMS Workflow

Test:
- create category
- upload images
- create project
- edit project
- delete project

Goal:
Verify CMS behaves correctly before frontend integration.

---

# PHASE 3 — Frontend Structure

## Step 11 — Create App Layout

Pages:
- Home
- Projects
- Project Details
- About
- Contact

Create:
- global layout
- navbar
- footer

---

## Step 12 — Create API Layer

Frontend fetches:
- projects
- categories
- media

from Payload APIs.

Verify:
- frontend receives data correctly

---

## Step 13 — Display Raw Data

Render:
- titles
- images
- categories

No advanced styling yet.

Goal:
Verify frontend/backend communication.

---

# PHASE 4 — UI Development

## Step 14 — Create Design System

Define:
- typography
- spacing
- breakpoints
- colors
- transition timings

Goal:
Maintain visual consistency.

---

## Step 15 — Build Reusable Components

Examples:
- navbar
- buttons
- project cards
- gallery grids
- image modal
- category filters

---

## Step 16 — Build Projects Listing Page

Features:
- responsive grid
- filtering
- category navigation
- hover interactions

---

## Step 17 — Build Project Detail Page

Features:
- image galleries
- fullscreen previews
- project descriptions
- related projects

---

## Step 18 — Mobile Responsiveness

Verify:
- mobile layouts
- tablet layouts
- touch interactions

Goal:
Responsive behavior across all devices.

---

# PHASE 5 — Motion & Polish

## Step 19 — Add Page Transitions

Optional:
- Framer Motion

---

## Step 20 — Add Scroll Animations

Examples:
- fade-in sections
- staggered grids
- image reveals

---

## Step 21 — Add Image Loading Effects

Examples:
- blur placeholders
- lazy loading
- smooth reveals

---

## Step 22 — Add Smooth Scrolling (Optional)

Optional:
- Lenis

Avoid excessive animations.

Goal:
Premium feel without hurting usability.

---

# PHASE 6 — SEO & Performance

## Step 23 — Add Metadata

Examples:
- titles
- descriptions
- OpenGraph tags

---

## Step 24 — Generate Sitemap

Verify:
- sitemap.xml exists

---

## Step 25 — Optimize Images

Use:
- Next.js Image optimization

Verify:
- responsive image sizes
- compression

---

## Step 26 — Lighthouse Testing

Verify:
- performance
- accessibility
- SEO
- best practices

---

# PHASE 7 — Production Infrastructure

## Step 27 — Setup Production Database

Recommended:
- Neon
- Supabase
- Railway

Verify:
- production DB connectivity

---

## Step 28 — Setup Media Storage

Recommended:
- Cloudflare R2

Verify:
- uploads work in production

---

## Step 29 — Deploy Payload CMS

Options:
- VPS
- Railway
- Render
- Docker

Verify:
- admin panel accessible online

---

## Step 30 — Deploy Frontend

Recommended:
- Vercel

Verify:
- frontend connected to production CMS

---

# PHASE 8 — Final Testing

## Step 31 — Test Admin Workflow

Test:
- project creation
- image uploads
- category editing
- content updates

---

## Step 32 — Test Frontend UX

Verify:
- animations
- responsiveness
- loading speed
- image rendering
- SEO previews

---

# PHASE 9 — Handover

Company should be able to:
- log into admin panel
- create projects
- upload galleries
- manage categories
- update content

without developer involvement.

---

# Important Development Notes

## 1. Build functionality first
Do NOT start with heavy animations.

First:
- data flow
- routing
- rendering
- responsiveness

Then:
- motion
- polish

---

## 2. Prioritize image quality
This project depends heavily on visuals.

Important:
- good compression
- responsive images
- clean gallery layouts

---

## 3. Keep UI minimal and premium
Avoid:
- excessive animations
- overcrowded layouts
- flashy effects

Prioritize:
- whitespace
- typography
- smooth transitions
- large imagery

---

## 4. Separate concerns clearly

Frontend:
- presentation

Payload:
- content management

Database:
- persistence

Storage:
- media hosting

---

# Suggested Future Features (Optional)

Possible future additions:
- testimonials
- before/after sliders
- project search
- inquiry forms
- multilingual support
- style tags
- materials filtering
- admin analytics
- Instagram integration
