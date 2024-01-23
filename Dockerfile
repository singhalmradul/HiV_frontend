FROM node:18.13.0-alpine3.14

# Create app directory
WORKDIR /usr/src/high-five/frontend

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]
