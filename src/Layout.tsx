import { Link, Outlet } from "react-router-dom";
import { AuthStatus } from "./components/auth-status";

export function Layout() {
  return (
    <div>
      <h1>Auth Example using RouterProvider</h1>

      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}