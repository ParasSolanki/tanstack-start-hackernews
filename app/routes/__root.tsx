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
      <nav className="mx-auto flex h-full max-w-5xl flex-wrap items-center justify-between p-4 text-base font-bold text-gray-800">
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

        <div className="flex items-center space-x-4">
          <a
            href="https://tanstack.com/start"
            target="_blank"
            className="text-sm underline-offset-2 transition-all hover:underline focus:underline"
            rel="noreferrer noopener"
          >
            Built with Tanstack Start
          </a>
          <a
            href="https://github.com/ParasSolanki/tanstack-start-hackernews"
            target="_blank"
            className="hover:opacity-80 focus:opacity-80"
            rel="noreferrer noopener"
            aria-label="Github repo"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-6 fill-slate-900"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              ></path>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
