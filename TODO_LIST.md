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

### TK-01 - Category Detail (/portfolio/category/[slug])

- Status: TODO
- Priority: HIGH

<details>
<summary>Details</summary>

- Create dynamic route with slug lookup in Payload.
- Render category title + media gallery.
- Add navigation to another category at page end.

</details>

### TK-02 - Projects Route (/projects)

- Status: TODO
- Priority: HIGH

<details>
<summary>Details</summary>

- Build projects index route with all project cards.
- Add filtering by related category/type.
- Link each card to project detail route.

</details>

### TK-03 - Project Detail (/projects/[slug])

- Status: TODO
- Priority: MEDIUM

<details>
<summary>Details</summary>

- Create dynamic route with slug lookup in Payload projects.
- Render project metadata + gallery.
- Optional optimization: generateStaticParams.

</details>

### TK-04 - Homepage Projects Feed

- Status: TODO
- Priority: MEDIUM

<details>
<summary>Details</summary>

- Replace static portfolio arrays with Payload-backed data.
- Prefer Server Component fetch from local Payload API.
- Reuse gallery/card UI where possible.

</details>

## Priority Queue

1. TK-01 - implement /portfolio/category/[slug]
2. TK-02 - implement /projects
3. TK-03 - implement /projects/[slug]
4. TK-04 - connect homepage projects to CMS

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
