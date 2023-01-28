#################
## BUILD STAGE ##
#################
FROM public.ecr.aws/docker/library/node:alpine AS build

WORKDIR /usr/app

# Copy files from Build
COPY *.json ./

# Copy env files
COPY .env ./

# Copy SRC
COPY ./src ./src

# NPM ci
RUN npm ci

# Build
RUN npm run build && npm prune --production

#################
## FINAL STAGE ##
#################
FROM public.ecr.aws/docker/library/node:alpine

ENV NODE_ENV production

RUN apk add bash

WORKDIR /usr/app

EXPOSE 3000 $PORT

COPY --from=build /usr/app/.env /usr/app/
COPY --from=build /usr/app/package*.json /usr/app/
COPY --from=build /usr/app/node_modules/ /usr/app/node_modules/
COPY --from=build /usr/app/dist/ /usr/app/dist/

CMD ["dist/main.js" ]
