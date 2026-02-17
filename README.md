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
