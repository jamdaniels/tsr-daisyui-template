import { Link } from "@tanstack/react-router";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="btn btn-ghost" to="/">
          Logo
        </Link>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost" to="/dashboard">
          Dashboard
        </Link>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <Link className="btn btn-primary flex gap-2" to="/auth">
          Login
        </Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
