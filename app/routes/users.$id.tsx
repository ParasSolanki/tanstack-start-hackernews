import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "~/components/not-found";
import { getUserDetails } from "~/server/fn";

export const Route = createFileRoute("/users/$id")({
  component: UserDetailsPage,
  loader: async ({ params }) => await getUserDetails({ id: params.id }),
  meta: ({ loaderData }) => [
    {
      title: `Tanstack Start | Profile: ${loaderData.id} | Hacker News`,
    },
    {
      name: "og:title",
      content: `Tanstack Start | Profile: ${loaderData.id} | Hacker News`,
    },
    {
      name: "twitter:title",
      content: `Tanstack Start | Profile: ${loaderData.id} | Hacker News`,
    },
  ],
  notFoundComponent: () => (
    <NotFound>
      <p>User does not exists</p>
    </NotFound>
  ),
});

function UserDetailsPage() {
  const data = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h1 className="text-2xl font-semibold text-cyan-800">User: {data.id}</h1>
      <p>
        Created:{" "}
        <span title={new Date(data.created * 1000).toLocaleString()}>
          {new Date(data.created * 1000).toLocaleString()}
        </span>
      </p>
      <p>Karma: {data.karma}</p>

      {data.about && (
        <div dangerouslySetInnerHTML={{ __html: data.about }}></div>
      )}

      <div className="flex divide-x-2 divide-gray-600">
        <a
          href={`https://news.ycombinator.com/submitted?id=${data.id}`}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-2 pr-2"
        >
          submissions
        </a>
        <a
          href={`https://news.ycombinator.com/threads?id=${data.id}`}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-2 px-2"
        >
          comments
        </a>
        <a
          href={`https://news.ycombinator.com/favorites?id=${data.id}`}
          target="_blank"
          rel="noreferrer noopener"
          className="underline underline-offset-2 pl-2"
        >
          favorites
        </a>
      </div>
    </div>
  );
}
