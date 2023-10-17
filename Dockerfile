FROM node:18-alpine as base
WORKDIR /app

FROM base as  builder
COPY package.json package-lock.json ./

RUN npm install
COPY . .
RUN npx nx run-many --target=build --all --prod

FROM base as builder-api
COPY --from=builder /app/dist/apps/github-commit-history-viewer-api .
RUN npm install --omit=dev

FROM base as api
COPY --from=builder-api /app .

ENV PORT=3000
EXPOSE ${PORT}

CMD ["node", "main.js"]

FROM base as builder-app

COPY --from=builder /app/dist/apps/github-commit-history-viewer-app .

RUN npm install --omit=dev

FROM nginx:1.25-alpine as app

COPY --from=builder-app /app /usr/share/nginx/html
COPY ./apps/github-commit-history-viewer-app/nginx/default.conf /etc/nginx/conf.d

ENV PORT=4200
EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]