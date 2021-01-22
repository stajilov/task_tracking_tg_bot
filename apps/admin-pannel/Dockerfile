FROM node:12

RUN npm install -g nodemon

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json


RUN cd /tmp && npm install  --production
RUN mkdir -p /app/admin-pannel && cp -a /tmp/node_modules /app/admin-pannel/

WORKDIR /app/admin-pannel

COPY dist/apps/admin-pannel/ /app/admin-pannel

EXPOSE 4300

CMD [ "nodemon", "main.js" ]