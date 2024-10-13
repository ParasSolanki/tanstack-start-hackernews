import { Link } from "@tanstack/react-router";
import type { Story } from "~/server/fn";

export function StoryCard({ story }: { story: Story }) {
  return (
    <>
      <div className="inline text-sm leading-tight">
        {story.type !== "ask" ? (
          <a
            href={story.url}
            rel="nofollow"
            className="text-cyan-500 font-medium hover:underline underline-offset-2 focus:underline mr-1"
          >
            {story.title}
          </a>
        ) : (
          <Link
            to="/stories/$id"
            params={{ id: story.id.toString() }}
            className="text-cyan-500 font-medium hover:underline underline-offset-2 focus:underline mr-1"
          >
            {story.title}
          </Link>
        )}
        <wbr />
        <span>{`(${story.domain})`}</span>
      </div>
      <div className="text-xs">
        {story.type !== "job" && (
          <>
            {story.points} {`${story.points > 1 ? "points" : "point"}`} by{" "}
            <Link
              to="/users/$id"
              params={{ id: story.user }}
              className="underline underline-offset-2"
            >
              {story.user}
            </Link>{" "}
            <Link
              to="/stories/$id"
              params={{ id: story.id.toString() }}
              title={new Date(story.time * 1000).toLocaleString()}
              className="hover:underline focus:underline underline-offset-2"
            >
              {story.time_ago}
            </Link>{" "}
            |{" "}
            <Link
              to="/stories/$id"
              params={{ id: story.id.toString() }}
              className="underline underline-offset-2"
            >
              {story.comments_count > 0
                ? `${story.comments_count} ${story.comments_count > 1 ? "comments" : "comment"}`
                : "discuss"}
            </Link>
          </>
        )}
        {story.type === "job" && (
          <Link
            to="/stories/$id"
            params={{ id: story.id.toString() }}
            title={new Date(story.time * 1000).toLocaleString()}
            className="underline underline-offset-2"
          >
            {story.time_ago}
          </Link>
        )}
      </div>
    </>
  );
}
