import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import styles from "~/styles/main.css?url";
import NavigationBar from "./components/NavigationBar";
import { ErrorBoundaryComponent } from "@remix-run/react/dist/routeModules";

export const meta: MetaFunction = () => {
  return [{ title: "Remix Shop" }];
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <NavigationBar />
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const ErrorBoundary: ErrorBoundaryComponent = () => {
  const error = useRouteError();

  return (
    <main>
      <h1>{error.message}</h1>
    </main>
  );
};
