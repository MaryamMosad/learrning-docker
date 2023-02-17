FROM node:18.14.0-alpine3.16

WORKDIR ./app


COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm" ,"start"]