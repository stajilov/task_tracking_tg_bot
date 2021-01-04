FROM node:12

RUN npm install -g nodemon

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install --production
RUN mkdir -p /app/backend && cp -a /tmp/node_modules /app/backend/

WORKDIR /app/backend
COPY dist/apps/backend/ /app/backend

EXPOSE 3000

CMD [ "nodemon", "main.js" ]