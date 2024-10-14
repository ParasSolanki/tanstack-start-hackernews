import {
  createRootRoute,
  Link,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
import { DefaultCatchBoundary } from "~/components/default-catch-boundary";
import { NotFound } from "~/components/not-found";
import globalCss from "~/styles/global.css?url";
import * as React from "react";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(() =>
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    );

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: "Tanstack Start | Hacker News",
    },
    {
      name: "og:type",
      content: "Website",
    },
    {
      name: "og:title",
      content: "Tanstack Start | Hacker News",
    },
    {
      name: "description",
      content: "Hacker News Clone built with Tanstack Start",
    },
    {
      name: "og:description",
      content: "Hacker News Clone built with Tanstack Start",
    },
    {
      name: "twitter:title",
      content: "Tanstack Start | Hacker News",
    },
    {
      name: "twitter:description",
      content: "Hacker News Clone built with Tanstack Start",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
  ],
  links: () => [
    { rel: "stylesheet", href: globalCss },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    { rel: "manifest", href: "/site.webmanifest", color: "#fffff" },
    { rel: "icon", href: "/favicon.ico" },
  ],
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <Header />
        <main className="mx-auto mt-4 max-w-5xl px-4">{children}</main>
        <ScrollRestoration />
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </Body>
    </Html>
  );
}

function Header() {
  return (
    <header className="h-16 w-full bg-gradient-to-r from-cyan-500 to-cyan-600">
      <nav className="mx-auto flex h-full max-w-5xl items-center justify-between p-4 text-base font-bold text-gray-800">
        <div className="flex space-x-6">
          <Link
            to="/"
            className="transition-colors hover:text-white focus:text-white"
            activeProps={{ className: "font-bold text-white" }}
          >
            HN
          </Link>
          <Link
            to="/new"
            className="transition-colors hover:text-white focus:text-white"
            activeProps={{ className: "font-bold text-white" }}
          >
            New
          </Link>
          <Link
            to="/show"
            className="transition-colors hover:text-white focus:text-white"
            activeProps={{ className: "font-bold text-white" }}
          >
            Show
          </Link>
          <Link
            to="/ask"
            className="transition-colors hover:text-white focus:text-white"
            activeProps={{ className: "font-bold text-white" }}
          >
            Ask
          </Link>
          <Link
            to="/jobs"
            className="transition-colors hover:text-white focus:text-white"
            activeProps={{ className: "font-bold text-white" }}
          >
            Jobs
          </Link>
        </div>

        <a
          href="https://tanstack.com/start"
          target="_blank"
          className="text-sm underline-offset-2 transition-all hover:underline focus:underline"
          rel="noreferrer noopener"
        >
          Built with Tanstack Start
        </a>
      </nav>
    </header>
  );
}
