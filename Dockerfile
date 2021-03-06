FROM node:lts-alpine as build-dist
WORKDIR app
COPY package.json /app
run yarn install
COPY . /app
RUN yarn build

FROM nginx:stable-alpine
WORKDIR website
COPY --from=build-dist ./app/dist /website
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
