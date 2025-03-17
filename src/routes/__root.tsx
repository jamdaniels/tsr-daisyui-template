import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Navbar } from "../features/layout/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
