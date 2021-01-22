FROM node:12

RUN npm install -g nodemon

ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm install --production
RUN mkdir -p /app/front-office && cp -a /tmp/node_modules /app/front-offce/

WORKDIR /app/front-office

COPY dist/apps/front-office/ /app/front-office

EXPOSE 80

CMD [ "nodemon", "main.js" ]