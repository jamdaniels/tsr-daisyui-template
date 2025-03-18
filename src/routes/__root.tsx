import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { IconError404, IconHome } from "@tabler/icons-react";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="max-w-6xl mx-auto">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
  notFoundComponent: () => (
    <div className="flex flex-col items-center gap-4 justify-center h-screen">
      <IconError404 stroke={2} size={200} />
      <Link className="btn btn-outline" to="/">
        <IconHome stroke={2} size={18} />
        Go Home
      </Link>
    </div>
  ),
});
