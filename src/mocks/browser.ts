import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { browser } from "$app/environment";

// This configures a Service Worker with the given request handlers.
export const worker = browser ? setupWorker(...handlers) : {};
