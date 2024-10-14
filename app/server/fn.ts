import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

const HN_STORY_API_URL = "https://node-hnapi.herokuapp.com";
const HN_STORY_USER_URL = "https://hacker-news.firebaseio.com/v0";

type BaseStory = {
  id: number;
  type: "ask" | "link" | "job";
  comments_count: number;
  time: number;
  time_ago: string;
  url: string;
  title: string;
  domain: string;
};

type RegularStory = BaseStory & {
  type: "ask" | "link";
  user: string;
  points: number;
};

type JobStory = BaseStory & {
  type: "job";
  user: null;
  points: null;
};

export type Comment = {
  content: string;
  id: string;
  level: number;
  time: number;
  time_ago: string;
  user: string;
  comments: Array<Comment>;
};

export type Story = RegularStory | JobStory;

export type StoryDetails = Story & {
  content?: string;
  comments: Array<Comment>;
};

export type User = {
  about?: string;
  created: number;
  id: string;
  karma: number;
  submitted: Array<number>;
};

export const getTopStories = createServerFn(
  "GET",
  async ({ page }: { page: number }) => {
    const response = await fetch(`${HN_STORY_API_URL}/news?page=${page}`);

    if (!response.ok)
      throw new Error("Something went wrong while getting top stories");

    return (await response.json()) as unknown as Array<Story>;
  },
);

export const getNewStories = createServerFn(
  "GET",
  async ({ page }: { page: number }) => {
    const response = await fetch(`${HN_STORY_API_URL}/newest?page=${page}`);

    if (!response.ok)
      throw new Error("Something went wrong while getting new stories");

    return (await response.json()) as unknown as Array<Story>;
  },
);

export const getShowStories = createServerFn(
  "GET",
  async ({ page }: { page: number }) => {
    const response = await fetch(`${HN_STORY_API_URL}/show?page=${page}`);

    if (!response.ok)
      throw new Error("Something went wrong while getting show stories");

    return (await response.json()) as unknown as Array<Story>;
  },
);

export const getAskStories = createServerFn(
  "GET",
  async ({ page }: { page: number }) => {
    const response = await fetch(`${HN_STORY_API_URL}/ask?page=${page}`);

    if (!response.ok)
      throw new Error("Something went wrong while getting ask stories");

    return (await response.json()) as unknown as Array<Story>;
  },
);

export const getJobStories = createServerFn(
  "GET",
  async ({ page }: { page: number }) => {
    const response = await fetch(`${HN_STORY_API_URL}/jobs?page=${page}`);

    if (!response.ok)
      throw new Error("Something went wrong while getting job stories");

    return (await response.json()) as unknown as Array<JobStory>;
  },
);

export const getStoryDetails = createServerFn(
  "GET",
  async ({ id }: { id: string }) => {
    const response = await fetch(`${HN_STORY_API_URL}/item/${id}`);

    if (!response.ok)
      throw new Error(`Something went wrong while getting ${id} story details`);

    const json = await response.json();

    if (!json) {
      throw notFound();
    }

    return json as unknown as StoryDetails;
  },
);

export const getUserDetails = createServerFn(
  "GET",
  async ({ id }: { id: string }) => {
    const response = await fetch(`${HN_STORY_USER_URL}/user/${id}.json`);

    if (!response.ok)
      throw new Error(`Something went wrong while getting ${id} user details`);

    const json = await response.json();

    if (!json) {
      throw notFound();
    }

    return json as unknown as User;
  },
);
