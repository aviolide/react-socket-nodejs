FROM node:10.15.0-alpine
EXPOSE 4001 5432 3000

WORKDIR /home/app/

COPY package.json /home/app/

RUN npm install
#RUN npm install --prefix web/

COPY . /home/app/

#RUN ls
#RUN pwd && cd src/utils && ls
#RUN pwd && cd web/ && ls
#RUN pwd && cd web/src && ls

#CMD /helpers/init_db.sh

#RUN npm run start --prefix web/
RUN npm run build
RUN npm run start
#RUN pwd && ls && cd build && ls

