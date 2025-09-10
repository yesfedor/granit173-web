FROM alpine:latest AS prepare-stage

ARG ENVIRONMENT_NAME
ARG BRANCH_NAME

ENV BRANCH_NAME=${BRANCH_NAME}

WORKDIR /app

RUN apk update && apk add --no-cache git

RUN /bin/sh -c "git clone --single-branch --branch $BRANCH_NAME https://git.iny.su/public-projects/granit173.git ."

COPY . .

FROM oven/bun:latest

ARG ENVIRONMENT_NAME

ENV ENVIRONMENT_NAME=${ENVIRONMENT_NAME}

COPY --from=prepare-stage /app /app

WORKDIR /app

# RUN /bin/sh -c "cp ./environments/${ENVIRONMENT_NAME}.env .env"

RUN bun install

RUN bun run build

COPY . .

EXPOSE 3000

CMD ["bun", "start"]
