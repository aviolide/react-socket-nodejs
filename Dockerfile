FROM node:10.15.0-alpine
EXPOSE 4001 5432 3000

WORKDIR /home/app/

COPY package.json /home/app/

RUN npm install

COPY . /home/app/
COPY /helpers/wait-for-it.sh .
RUN npm run server:start
