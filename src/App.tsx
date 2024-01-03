import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { fakeAuthProvider } from "./providers/AuthProvider";
import { loginLoader } from "./components/login-loader";
import { protectedLoader } from "./components/protected-loeader";
import { loginAction } from "./actions/login-action";

import { GetStarted } from "./pages/(auth)/get-started";
import { Dashboard } from "./pages/(main)/dashboard";
import { MainLayout } from "./pages/(main)/main-layout";
import { PublicPage } from "./pages/(main)/public-page";
import AuthLayout from "./pages/(auth)/auth-layout";
import { SingUp } from "./pages/(auth)/sign-up";
import { SingIn } from "./pages/(auth)/sign-in";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // Our root route always provides the user, if logged in
      return { user: fakeAuthProvider.username };
    },
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: PublicPage,
      },
      {
        path: "protected",
        loader: protectedLoader,
        Component: Dashboard,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: "get-started",
        action: loginAction,
        loader: loginLoader,
        Component: GetStarted,
      },
      {
        path: "sign-in",
        action: loginAction,
        loader: loginLoader,
        Component: SingIn,
      },
      {
        path: "sign-up",
        action: loginAction,
        loader: loginLoader,
        Component: SingUp,
      },
    ],
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect("/");
    },
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  );
}

