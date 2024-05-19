import { env } from "./env.js";

import "@/middleware/use-graphql.js";
import "@/middleware/use-cors.js";
import "@/middleware/use-api.js";
import "@/routes/api/get-test.js";
import "@/routes/api/post-upload.js";
import "@/middleware/use-json.js";

console.info("Server online on port:", env.UNSAFE_BACKEND_URL.port);
