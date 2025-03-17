import { createFileRoute } from "@tanstack/react-router";
import {
  IconLayoutDashboard,
  IconUsers,
  IconSettings,
  IconChartBar,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-base-200 transition-all duration-300 rounded-lg ${isCollapsed ? "w-16" : "w-56"}`}
      >
        <div
          className={`flex ${isCollapsed ? "justify-center" : "justify-end"} p-4`}
        >
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <IconLayoutSidebarLeftExpand size={20} />
            ) : (
              <IconLayoutSidebarLeftCollapse size={20} />
            )}
          </button>
        </div>
        <ul className="menu rounded-box w-full">
          <li>
            <a>
              <IconLayoutDashboard size={18} />
              {!isCollapsed && <span>Overview</span>}
            </a>
          </li>
          <li>
            <a>
              <IconUsers size={18} />
              {!isCollapsed && <span>Users</span>}
            </a>
          </li>
          <li>
            <a>
              <IconChartBar size={18} />
              {!isCollapsed && <span>Analytics</span>}
            </a>
          </li>
          <li>
            <a>
              <IconSettings size={18} />
              {!isCollapsed && <span>Settings</span>}
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <p className="mt-4">This is your main content area.</p>
      </div>
    </div>
  );
}
