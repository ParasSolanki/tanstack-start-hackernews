/// <reference types="vinxi/types/server" />
import { getRouterManifest } from "@tanstack/start/router-manifest";
import {
  createStartHandler,
  defaultStreamHandler,
} from "@tanstack/start/server";
import { createRouter } from "./router";

// eslint-disable-next-line react-refresh/only-export-components
export default createStartHandler({
  createRouter,
  getRouterManifest,
})(defaultStreamHandler);
