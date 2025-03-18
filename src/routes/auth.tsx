import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../features/landing/components/Navbar";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <div className="card bg-base-200 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
          <h2 className="card-title mb-2">Login</h2>
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
            </fieldset>
            <div className="divider">Or</div>
            <button className="btn btn-outline">Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
