import { createFileRoute, Link } from "@tanstack/react-router";
import { StoryCard } from "~/components/story-card";
import { getShowStories } from "~/server/fn";

type ShowPageSearchParams = {
  page?: number;
};

export const Route = createFileRoute("/show")({
  validateSearch: (search: Record<string, unknown>): ShowPageSearchParams => {
    return {
      page: Number.isInteger(search?.page) ? Number(search.page) : 1,
    };
  },
  component: ShowPage,
  loaderDeps: ({ search }) => ({ search }),
  loader: async ({ deps: { search } }) =>
    await getShowStories({ page: search?.page ?? 1 }),
  meta: () => [
    {
      title: "Tanstack Start | Show | Hacker News",
    },
    {
      name: "og:title",
      content: "Tanstack Start | Show | Hacker News",
    },
    {
      name: "twitter:title",
      content: "Tanstack Start | Show | Hacker News",
    },
  ],
});

function ShowPage() {
  const data = Route.useLoaderData();
  const search = Route.useSearch();

  return (
    <>
      <div className="flex justify-center space-x-4 p-4">
        {!!search.page && (
          <Link
            to="/"
            search={{ page: search.page - 1 }}
            className="text-cyan-500 aria-disabled:text-gray-500"
            aria-disabled={search.page === 1}
            disabled={search.page === 1}
          >
            <span className="text-gray-500">&lt;</span> prev
          </Link>
        )}
        <span className="text-cyan-500">page {search.page}</span>
        {!!search.page && (
          <Link
            className="text-cyan-500"
            to="/"
            search={{ page: search.page + 1 }}
          >
            next <span className="text-gray-500">&gt;</span>
          </Link>
        )}
      </div>
      <ul className="divide-y divide-gray-400">
        {data.map((story) => (
          <li key={story.id} className="py-4">
            <StoryCard story={story} />
          </li>
        ))}
      </ul>
    </>
  );
}
