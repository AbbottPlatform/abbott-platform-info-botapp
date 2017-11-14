FROM node:7.10.1-alpine

WORKDIR /usr/app

RUN apk update

COPY package.json .
RUN npm install --quiet

COPY . .

EXPOSE 80

ENTRYPOINT ["/nodejs/bin/npm", "start"]