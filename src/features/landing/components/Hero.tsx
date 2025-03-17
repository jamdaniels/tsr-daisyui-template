import logo from "../../../daisyui.svg";

export function Hero() {
  return (
    <div className="hero bg-base-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={logo} className="h-[40vmin] pointer-events-none" alt="logo" />
        <div className="flex flex-col gap-4">
          <a
          className="btn btn-ghost btn-xl"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="btn btn-ghost btn-xl"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
          <a
            className="btn btn-ghost btn-xl"
            href="https://daisyui.com"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn daisyUI
        </a>
        </div>
      </div>
    </div>
  );
}
