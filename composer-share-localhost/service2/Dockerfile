FROM node:16

WORKDIR /usr/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

ENV NODE_ENV='DOCKER'

ENTRYPOINT [ "npm", "start" ]