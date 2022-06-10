FROM node:16

WORKDIR /usr/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

EXPOSE 4003

ENTRYPOINT [ "npm", "test" ]

