import { createFileRoute, Link } from "@tanstack/react-router";
import { NotFound } from "~/components/not-found";
import { StoryCard } from "~/components/story-card";
import { getStoryDetails } from "~/server/fn";
import type { Comment } from "~/server/fn";
import * as React from "react";

export const Route = createFileRoute("/stories/$id")({
  component: StoryDetailsPage,
  loader: async ({ params }) => await getStoryDetails({ id: params.id }),
  meta: ({ loaderData }) => [
    {
      title: `Tanstack Start | ${loaderData.title} | Hacker News`,
    },
    {
      name: "og:title",
      content: `Tanstack Start | ${loaderData.title} | Hacker News`,
    },
    {
      name: "twitter:title",
      content: `Tanstack Start | ${loaderData.title} | Hacker News`,
    },
  ],
  notFoundComponent: () => (
    <NotFound>
      <p>Story does not exists</p>
    </NotFound>
  ),
});

function StoryDetailsPage() {
  const data = Route.useLoaderData();

  return (
    data && (
      <>
        <div className="py-4">
          <StoryCard story={data} />
        </div>
        {data.content && (
          <div
            className="space-y-2 text-sm"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        )}

        <ul className="divide-y-2 divide-gray-600">
          {data.comments.map((c) => (
            <Comment comment={c} />
          ))}
        </ul>
      </>
    )
  );
}

function Comment({
  comment,
  parent,
}: {
  comment: Comment;
  parent?: Comment["id"];
}) {
  const [open, setOpen] = React.useState(true);
  const storyId = Route.useParams({ select: ({ id }) => id });

  return (
    <li
      id={comment.id}
      style={{ "--level": `${comment.level * 6}px` } as React.CSSProperties}
      className="space-y-2 py-2 pl-[--level] text-sm"
      data-state={open ? "open" : "closed"}
    >
      <div className="flex items-center space-x-1 text-xs">
        <Link
          to="/users/$id"
          params={{ id: comment.user }}
          className="underline underline-offset-2"
        >
          {comment.user}
        </Link>
        <Link
          to="/stories/$id"
          params={{ id: storyId.toString() }}
          title={new Date(comment.time * 1000).toLocaleString()}
          className="underline-offset-2 hover:underline focus:underline"
        >
          {comment.time_ago}
        </Link>
        {parent && (
          <>
            &nbsp;|
            <Link
              to="/stories/$id"
              params={{ id: storyId.toString() }}
              hash={parent}
              className="underline-offset-2 hover:underline focus:underline"
            >
              parent
            </Link>
          </>
        )}
      </div>

      {comment.content && (
        <div
          className="space-y-2 text-xs"
          dangerouslySetInnerHTML={{ __html: comment.content }}
        />
      )}

      {open && !!comment.comments.length && (
        <>
          <div className="flex items-center">
            <button type="button" onClick={() => setOpen(false)}>
              [-]
            </button>
            <div className="ml-2 h-0.5 w-full bg-gray-600" />
          </div>
          <ul className="divide-y-2 divide-gray-600">
            {comment.comments.map((c) => (
              <Comment comment={c} parent={comment.id} />
            ))}
          </ul>
        </>
      )}

      {!open && !!comment.comments.length && (
        <button
          type="button"
          className="w-full bg-yellow-100 text-left"
          onClick={() => setOpen(true)}
        >
          {`[+] ${comment.comments.length} ${comment.comments.length > 0 ? "replies" : "reply"} collapsed`}
        </button>
      )}
    </li>
  );
}
