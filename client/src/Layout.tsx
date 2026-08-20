import { Outlet } from "react-router";
import { Background } from "./Background";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="bg-background flex flex-col">
      <Background />
      <Navigation />
      <main className="min-h-[70vh] mx-auto px-4 py-8 mt-10 z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}