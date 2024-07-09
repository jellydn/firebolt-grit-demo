FROM node:20.15.1 AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb panda.config.mjs /temp/dev/
RUN npm install -g bun
RUN cd /temp/dev && bun install

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

ENV NODE_ENV=production
RUN npm run css:generate
RUN npm run build

# copy production dependencies and source code into final image
FROM node:20.15.1-alpine AS release
COPY --from=install /temp/dev/node_modules node_modules
COPY --from=prerelease /usr/src/app/.firebolt .firebolt
COPY --from=prerelease /usr/src/app/routes routes
COPY --from=prerelease /usr/src/app/package.json .
COPY --from=prerelease /usr/src/app/styled-system styled-system

# run the app
EXPOSE 3000/tcp
ENV PORT 3000
ENTRYPOINT [ "npm", "run", "start" ]
