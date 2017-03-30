FROM node:boron

# Create app directory
ENV NODE_ROOT /home/web/site
RUN mkdir -p $NODE_ROOT

# Set working directory, where the commands will be ran:
WORKDIR $NODE_ROOT

# Install app dependencies
COPY package.json $NODE_ROOT
RUN npm install

# Bundle app source
COPY . $NODE_ROOT

EXPOSE 3000

CMD [ "npm", "start" ]
