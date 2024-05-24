import { env } from "@/env.js";
import { apolloServer } from "@/server.js";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import express, { type Router } from "express";

export default (router: Router): void => {
  router.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: env.CORS_ORIGIN,
      credentials: true
    }),
    express.json(),
    expressMiddleware(apolloServer)
  );
};
