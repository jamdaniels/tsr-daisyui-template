import { createFileRoute, Link } from "@tanstack/react-router";
import {
  IconLayoutDashboard,
  IconUsers,
  IconSettings,
  IconChartBar,
  IconFolder,
  IconFilePlus,
} from "@tabler/icons-react";
import { ThemeSwitcher } from "../features/landing/components/ThemeSwitcher";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex h-screen border-x-1 border-base-300">
      <div id="sidebar" className="w-56 border-r-1 border-base-300">
        <Link to="/" className="btn btn-ghost m-2">
          Logo
        </Link>
        <ul className="menu rounded-box w-full">
          <li>
            <a>
              <IconLayoutDashboard size={18} />
              Overview
            </a>
          </li>
          <li>
            <a>
              <IconUsers size={18} />
              Users
            </a>
          </li>
          <li>
            <a>
              <IconChartBar size={18} />
              Analytics
            </a>
          </li>
          <li>
            <a>
              <IconSettings size={18} />
              Settings
            </a>
          </li>
        </ul>
      </div>
      <div id="main-container" className="w-full">
        <div className="flex items-center justify-between border-b border-b-base-300 py-2 px-4">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a className="p-1">
                  <IconFolder size={16} className="stroke-current" />
                  Home
                </a>
              </li>
              <li>
                <a className="p-1">
                  <IconFolder size={16} className="stroke-current" />
                  Documents
                </a>
              </li>
              <li>
                <a className="p-1">
                  <IconFilePlus size={16} className="stroke-current" />
                  Add Document
                </a>
              </li>
            </ul>
          </div>
          <ThemeSwitcher />
        </div>
        <div id="content" className="p-8">
          <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
          <p className="mt-4">This is your main content area.</p>
        </div>
      </div>
    </div>
  );
}
