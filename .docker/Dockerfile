# If this monorepo was massive, I could run extra processes to create separate smaller images
# and prune unwanted files but for now, I will create one and run everything through it
# Also yes, adding node user permissions is going to happen at some point.

FROM node:20.14.0

ARG UNSAFE_BACKEND_URL

ENV UNSAFE_BACKEND_URL=${UNSAFE_BACKEND_URL}

WORKDIR /usr/src/app

COPY . .

RUN npm i -g npm@10.8.1

RUN npm ci --ignore-scripts

ENV NODE_ENV=production

RUN npm run build

RUN npm prune

WORKDIR /usr/src/app
