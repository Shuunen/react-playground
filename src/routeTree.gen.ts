/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ContactImport } from './routes/contact'
import { Route as BookAppointmentImport } from './routes/book-appointment'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as BookAppointmentStep3Import } from './routes/book-appointment/step-3'
import { Route as BookAppointmentStep1Import } from './routes/book-appointment/step-1'
import { Route as BookAppointmentDogStep2Import } from './routes/book-appointment/dog/step-2'
import { Route as BookAppointmentCatStep2Import } from './routes/book-appointment/cat/step-2'

// Create/Update Routes

const ContactRoute = ContactImport.update({
  id: '/contact',
  path: '/contact',
  getParentRoute: () => rootRoute,
} as any)

const BookAppointmentRoute = BookAppointmentImport.update({
  id: '/book-appointment',
  path: '/book-appointment',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const BookAppointmentStep3Route = BookAppointmentStep3Import.update({
  id: '/step-3',
  path: '/step-3',
  getParentRoute: () => BookAppointmentRoute,
} as any)

const BookAppointmentStep1Route = BookAppointmentStep1Import.update({
  id: '/step-1',
  path: '/step-1',
  getParentRoute: () => BookAppointmentRoute,
} as any)

const BookAppointmentDogStep2Route = BookAppointmentDogStep2Import.update({
  id: '/dog/step-2',
  path: '/dog/step-2',
  getParentRoute: () => BookAppointmentRoute,
} as any)

const BookAppointmentCatStep2Route = BookAppointmentCatStep2Import.update({
  id: '/cat/step-2',
  path: '/cat/step-2',
  getParentRoute: () => BookAppointmentRoute,
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
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/book-appointment': {
      id: '/book-appointment'
      path: '/book-appointment'
      fullPath: '/book-appointment'
      preLoaderRoute: typeof BookAppointmentImport
      parentRoute: typeof rootRoute
    }
    '/contact': {
      id: '/contact'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactImport
      parentRoute: typeof rootRoute
    }
    '/book-appointment/step-1': {
      id: '/book-appointment/step-1'
      path: '/step-1'
      fullPath: '/book-appointment/step-1'
      preLoaderRoute: typeof BookAppointmentStep1Import
      parentRoute: typeof BookAppointmentImport
    }
    '/book-appointment/step-3': {
      id: '/book-appointment/step-3'
      path: '/step-3'
      fullPath: '/book-appointment/step-3'
      preLoaderRoute: typeof BookAppointmentStep3Import
      parentRoute: typeof BookAppointmentImport
    }
    '/book-appointment/cat/step-2': {
      id: '/book-appointment/cat/step-2'
      path: '/cat/step-2'
      fullPath: '/book-appointment/cat/step-2'
      preLoaderRoute: typeof BookAppointmentCatStep2Import
      parentRoute: typeof BookAppointmentImport
    }
    '/book-appointment/dog/step-2': {
      id: '/book-appointment/dog/step-2'
      path: '/dog/step-2'
      fullPath: '/book-appointment/dog/step-2'
      preLoaderRoute: typeof BookAppointmentDogStep2Import
      parentRoute: typeof BookAppointmentImport
    }
  }
}

// Create and export the route tree

interface BookAppointmentRouteChildren {
  BookAppointmentStep1Route: typeof BookAppointmentStep1Route
  BookAppointmentStep3Route: typeof BookAppointmentStep3Route
  BookAppointmentCatStep2Route: typeof BookAppointmentCatStep2Route
  BookAppointmentDogStep2Route: typeof BookAppointmentDogStep2Route
}

const BookAppointmentRouteChildren: BookAppointmentRouteChildren = {
  BookAppointmentStep1Route: BookAppointmentStep1Route,
  BookAppointmentStep3Route: BookAppointmentStep3Route,
  BookAppointmentCatStep2Route: BookAppointmentCatStep2Route,
  BookAppointmentDogStep2Route: BookAppointmentDogStep2Route,
}

const BookAppointmentRouteWithChildren = BookAppointmentRoute._addFileChildren(
  BookAppointmentRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/book-appointment': typeof BookAppointmentRouteWithChildren
  '/contact': typeof ContactRoute
  '/book-appointment/step-1': typeof BookAppointmentStep1Route
  '/book-appointment/step-3': typeof BookAppointmentStep3Route
  '/book-appointment/cat/step-2': typeof BookAppointmentCatStep2Route
  '/book-appointment/dog/step-2': typeof BookAppointmentDogStep2Route
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/book-appointment': typeof BookAppointmentRouteWithChildren
  '/contact': typeof ContactRoute
  '/book-appointment/step-1': typeof BookAppointmentStep1Route
  '/book-appointment/step-3': typeof BookAppointmentStep3Route
  '/book-appointment/cat/step-2': typeof BookAppointmentCatStep2Route
  '/book-appointment/dog/step-2': typeof BookAppointmentDogStep2Route
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/book-appointment': typeof BookAppointmentRouteWithChildren
  '/contact': typeof ContactRoute
  '/book-appointment/step-1': typeof BookAppointmentStep1Route
  '/book-appointment/step-3': typeof BookAppointmentStep3Route
  '/book-appointment/cat/step-2': typeof BookAppointmentCatStep2Route
  '/book-appointment/dog/step-2': typeof BookAppointmentDogStep2Route
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/book-appointment'
    | '/contact'
    | '/book-appointment/step-1'
    | '/book-appointment/step-3'
    | '/book-appointment/cat/step-2'
    | '/book-appointment/dog/step-2'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/book-appointment'
    | '/contact'
    | '/book-appointment/step-1'
    | '/book-appointment/step-3'
    | '/book-appointment/cat/step-2'
    | '/book-appointment/dog/step-2'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/book-appointment'
    | '/contact'
    | '/book-appointment/step-1'
    | '/book-appointment/step-3'
    | '/book-appointment/cat/step-2'
    | '/book-appointment/dog/step-2'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  BookAppointmentRoute: typeof BookAppointmentRouteWithChildren
  ContactRoute: typeof ContactRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  BookAppointmentRoute: BookAppointmentRouteWithChildren,
  ContactRoute: ContactRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/book-appointment",
        "/contact"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/book-appointment": {
      "filePath": "book-appointment.tsx",
      "children": [
        "/book-appointment/step-1",
        "/book-appointment/step-3",
        "/book-appointment/cat/step-2",
        "/book-appointment/dog/step-2"
      ]
    },
    "/contact": {
      "filePath": "contact.tsx"
    },
    "/book-appointment/step-1": {
      "filePath": "book-appointment/step-1.tsx",
      "parent": "/book-appointment"
    },
    "/book-appointment/step-3": {
      "filePath": "book-appointment/step-3.tsx",
      "parent": "/book-appointment"
    },
    "/book-appointment/cat/step-2": {
      "filePath": "book-appointment/cat/step-2.tsx",
      "parent": "/book-appointment"
    },
    "/book-appointment/dog/step-2": {
      "filePath": "book-appointment/dog/step-2.tsx",
      "parent": "/book-appointment"
    }
  }
}
ROUTE_MANIFEST_END */
