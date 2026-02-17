import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const MarketingApp = lazy(() =>
  import('../modules/marketing').then((module) => ({
    default: module.MarketingApp,
  })),
);

const RoomDetailsPage = lazy(() =>
  import('../modules/marketing').then((module) => ({
    default: module.RoomDetailsPage,
  })),
);

const AllRoomsPage = lazy(() =>
  import('../modules/marketing').then((module) => ({
    default: module.AllRoomsPage,
  })),
);

function AppLoader() {
  return (
    <div className="grid min-h-screen place-items-center bg-brand-light px-6 text-center">
      <p className="font-sans text-sm uppercase tracking-[0.2em] text-brand-text">
        Preparing your stay experience...
      </p>
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-light px-6">
      <section className="text-center">
        <h1 className="font-serif text-4xl text-brand-dark">{title}</h1>
        <p className="mt-3 font-sans text-brand-text">
          This area is reserved for your next module.
        </p>
      </section>
    </main>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<MarketingApp />} />
          <Route path="/rooms" element={<AllRoomsPage />} />
          <Route path="/rooms/:roomSlug" element={<RoomDetailsPage />} />
          <Route path="/auth/login" element={<PlaceholderPage title="Guest Login" />} />
          <Route path="/admin" element={<PlaceholderPage title="Admin Console" />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
