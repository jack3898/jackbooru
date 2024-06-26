import { z } from "zod";
import { username, password, email } from "./account.js";

export const NODE_ENV = z.enum(["production", "development"]);

export const UNSAFE_BACKEND_URL = z
  .string()
  .url()
  .transform((v) => new URL(v));

export const FRONTEND_PORT = z.number({ coerce: true }).min(0).max(25565);

export const CORS_ORIGIN = z.string().url();

export const POSTGRES_URL = z.string().url();

export const TEST_USERNAME = username;

export const TEST_PASSWORD = password;

export const TEST_EMAIL = email;

export const COOKIE_SECRET = z.string().min(36);

export const JWT_SECRET = z.string().min(36);

export const STORAGE_DRIVER = z.discriminatedUnion("STORAGE_DRIVER", [
  z.object({
    STORAGE_DRIVER: z.literal("node_local"),
    STORAGE_BASE_PATH: z.string()
  }),
  z.object({
    STORAGE_DRIVER: z.literal("s3")
    // Coming soon!
  })
]);
