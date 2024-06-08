import { deletePost } from "./resolvers/mutation/mutate-posts.js";
import { getFileByPostId, getFileVariants } from "./resolvers/query/get-files.js";
import { getPost, getPosts } from "./resolvers/query/get-posts.js";
import { getLoggedInUser, getPublicUser } from "./resolvers/query/get-users.js";
import { type Resolvers } from "./types/generated-graphql-types.js";

export const resolvers: Resolvers = {
  Query: {
    posts: (_, args) => getPosts(args.filter?.toString()),
    post: (_, args) => getPost(args.id),
    loggedInUser: getLoggedInUser,
    publicUser: (_, args) => getPublicUser(args.id)
  },
  Mutation: {
    deletePost: (_, { id: postId }, { req }) => deletePost(postId.toString(), req.user.userId)
  },
  Post: {
    author: (parent) => getPublicUser(parent.authorId),
    file: (parent) => getFileByPostId(parent.id),
    isOwner: (parent, _, { req }) => parent.authorId === req.user.userId
  },
  File: {
    variants: (parent) => getFileVariants(parent.id)
  }
};
