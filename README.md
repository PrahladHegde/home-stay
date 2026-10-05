# Home Stay Web App

A React + TypeScript frontend for a hotel/homestay business website.  
It is currently frontend-only, with structure prepared for future backend integration (auth, CRUD, booking APIs).

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS v4
- Framer Motion
- Lucide React (icons)
- ESLint

## What Is Implemented

- Responsive marketing landing page (mobile/tablet/desktop)
- Sticky navbar with mobile menu + outside-click close behavior
- Hero section with CTA buttons
- About, Activities, Contact sections
- Scroll-to-top floating button
- Room showcase on landing page (shows up to 3 main rooms)
- Dedicated `All Rooms` page (`/rooms`) with responsive auto-fit cards
- Room details page (`/rooms/:roomSlug`) with:
  - gallery carousel + expanded view
  - amenities with icons
  - description + main features
  - check-in/check-out, rules, terms and conditions
  - booking CTA
- Booking buttons currently redirect to a configurable Google Form URL
- Section animations (spring/bounce reveal style)

## Single Place To Edit App Content

All business/content data is centralized in:

- `src/modules/marketing/data/content.ts`

This includes:

- site title/footer text
- hero/about/activity/contact content
- nav labels
- booking form URL
- room list and full room details
- section labels and CTA text

If someone maintains this app later, this is the first file to update.

## Photos And Image Optimization

Original photos are large (about 15 MB each), so the site never serves them directly. A script converts them into small, responsive WebP files.

- Generated files: `public/images/` (committed, served by Vercel with 1-year caching)
- Generated manifest: `src/modules/marketing/data/images.generated.ts` (committed, do not edit by hand)
- Script: `scripts/optimize-images.mjs`, component: `src/components/ui/ResponsiveImage.tsx`

Each photo is saved at widths 320, 640, 1024, 1600 and 2400 px (WebP, quality 85) plus a tiny blurred preview. The browser picks the smallest size that looks sharp on the visitor's screen. Originals are never modified.

### Adding, replacing or removing photos

1. Add, replace or delete files in `home_stay_original_photos/`.
2. Run `npm run images`.
3. Commit `public/images/` and `images.generated.ts`, then push.

### File naming rules

Names are case-insensitive; words are separated by `_`, `-` or spaces. Allowed extensions: `.jpg`, `.jpeg`, `.png`, `.webp`.

- A photo belongs to the room named by the start of its file name. Optional endings `_Bathroom` and `_Study_Table`, and a trailing number, are ignored when grouping.
  - `Twin_Room_1`, `Twin_Room_Bathroom_2`, `Twin_Room_Study_Table` all go to the `twin-room` group.
  - A new `Twin_Room_3.JPG` appears in that gallery automatically.
- The first file in a group (sorted by name, so `Room.JPG` or `Room_1.JPG`) is the card/cover image. Use `_1`, `_2`, ... to control gallery order.
- Use a different start of the name for a different room or group (for example `Hall_1.JPG` becomes group `hall`).
- A room in `content.ts` picks up its photos with `imageGroup('<group>')`, for example `imageGroup('twin-room')`. For a new room, add photos with that prefix, run the script, then add the room using that group name. A wrong or missing group name does not break the site: that room shows a "Photo unavailable" placeholder and the browser console logs an error naming the group.
- Replacing a photo: keep the same file name or delete the old one. Stale generated files are removed on the next run.

Tuning: change `WIDTHS` and `WEBP_QUALITY` at the top of the script.

## Project Structure (High Level)

- `src/app/AppRouter.tsx`: app routes
- `src/modules/marketing/MarketingApp.tsx`: landing composition
- `src/modules/marketing/AllRoomsPage.tsx`: all room types page
- `src/modules/marketing/RoomDetailsPage.tsx`: room details page
- `src/modules/marketing/components/*`: reusable marketing sections
- `src/modules/marketing/data/content.ts`: centralized content/config

## Routes

- `/` -> Landing page
- `/rooms` -> All room types
- `/rooms/:roomSlug` -> Room details
- `/auth/login` -> Placeholder
- `/admin` -> Placeholder

## Run Locally (From Git)

1. Clone repository

```bash
git clone <your-repo-url>
```

2. Enter project directory

```bash
cd home-stay
```

3. Install dependencies, build the app & Start development server

```bash
npm run setup
```

4. Open in browser

- Vite will print local URL (usually `http://localhost:5173`)


## Notes for Future Backend Work

- Add API client/services layer (typed contracts)
- Add auth/session flow and protected routes
- Replace static content with backend-managed data where needed
- Add test coverage (unit + e2e) before production rollout
