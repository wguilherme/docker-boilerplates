# COPY ["package.json", "package-lock.json", "./"]
FROM node:16

WORKDIR /usr/react-vite-ts

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "dev"]

