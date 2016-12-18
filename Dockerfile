FROM node:argon-alpine
MAINTAINER Yingray Lu "yingray.lu@fuhu.com"
RUN npm install -g yarn

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Copy project files
#VOLUME . /app
COPY ./build /app/build
COPY ./package.json /app/package.json
COPY ./server.js /app/server.js


# Install app dependencies
RUN yarn --production

# Bundle app source
#RUN npm run build

EXPOSE 9000
CMD [ "node", "server.js" ]