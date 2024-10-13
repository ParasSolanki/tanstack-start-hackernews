/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ShowImport } from './routes/show'
import { Route as NewImport } from './routes/new'
import { Route as JobsImport } from './routes/jobs'
import { Route as AskImport } from './routes/ask'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIdImport } from './routes/users.$id'
import { Route as StoriesIdImport } from './routes/stories.$id'

// Create/Update Routes

const ShowRoute = ShowImport.update({
  path: '/show',
  getParentRoute: () => rootRoute,
} as any)

const NewRoute = NewImport.update({
  path: '/new',
  getParentRoute: () => rootRoute,
} as any)

const JobsRoute = JobsImport.update({
  path: '/jobs',
  getParentRoute: () => rootRoute,
} as any)

const AskRoute = AskImport.update({
  path: '/ask',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersIdRoute = UsersIdImport.update({
  path: '/users/$id',
  getParentRoute: () => rootRoute,
} as any)

const StoriesIdRoute = StoriesIdImport.update({
  path: '/stories/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/ask': {
      id: '/ask'
      path: '/ask'
      fullPath: '/ask'
      preLoaderRoute: typeof AskImport
      parentRoute: typeof rootRoute
    }
    '/jobs': {
      id: '/jobs'
      path: '/jobs'
      fullPath: '/jobs'
      preLoaderRoute: typeof JobsImport
      parentRoute: typeof rootRoute
    }
    '/new': {
      id: '/new'
      path: '/new'
      fullPath: '/new'
      preLoaderRoute: typeof NewImport
      parentRoute: typeof rootRoute
    }
    '/show': {
      id: '/show'
      path: '/show'
      fullPath: '/show'
      preLoaderRoute: typeof ShowImport
      parentRoute: typeof rootRoute
    }
    '/stories/$id': {
      id: '/stories/$id'
      path: '/stories/$id'
      fullPath: '/stories/$id'
      preLoaderRoute: typeof StoriesIdImport
      parentRoute: typeof rootRoute
    }
    '/users/$id': {
      id: '/users/$id'
      path: '/users/$id'
      fullPath: '/users/$id'
      preLoaderRoute: typeof UsersIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/ask': typeof AskRoute
  '/jobs': typeof JobsRoute
  '/new': typeof NewRoute
  '/show': typeof ShowRoute
  '/stories/$id': typeof StoriesIdRoute
  '/users/$id': typeof UsersIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/ask': typeof AskRoute
  '/jobs': typeof JobsRoute
  '/new': typeof NewRoute
  '/show': typeof ShowRoute
  '/stories/$id': typeof StoriesIdRoute
  '/users/$id': typeof UsersIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/ask': typeof AskRoute
  '/jobs': typeof JobsRoute
  '/new': typeof NewRoute
  '/show': typeof ShowRoute
  '/stories/$id': typeof StoriesIdRoute
  '/users/$id': typeof UsersIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/ask'
    | '/jobs'
    | '/new'
    | '/show'
    | '/stories/$id'
    | '/users/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/ask' | '/jobs' | '/new' | '/show' | '/stories/$id' | '/users/$id'
  id:
    | '__root__'
    | '/'
    | '/ask'
    | '/jobs'
    | '/new'
    | '/show'
    | '/stories/$id'
    | '/users/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AskRoute: typeof AskRoute
  JobsRoute: typeof JobsRoute
  NewRoute: typeof NewRoute
  ShowRoute: typeof ShowRoute
  StoriesIdRoute: typeof StoriesIdRoute
  UsersIdRoute: typeof UsersIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AskRoute: AskRoute,
  JobsRoute: JobsRoute,
  NewRoute: NewRoute,
  ShowRoute: ShowRoute,
  StoriesIdRoute: StoriesIdRoute,
  UsersIdRoute: UsersIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/ask",
        "/jobs",
        "/new",
        "/show",
        "/stories/$id",
        "/users/$id"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/ask": {
      "filePath": "ask.tsx"
    },
    "/jobs": {
      "filePath": "jobs.tsx"
    },
    "/new": {
      "filePath": "new.tsx"
    },
    "/show": {
      "filePath": "show.tsx"
    },
    "/stories/$id": {
      "filePath": "stories.$id.tsx"
    },
    "/users/$id": {
      "filePath": "users.$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
