FROM node:alpine

RUN mkdir -p /app

# Set /app as the working directory
WORKDIR /app

COPY package*.json /app

RUN yarn install

# Copy the rest of our Next.js folder into /app
COPY . /app

# Ensure port 3000 is accessible to our system
EXPOSE 3000

# Run yarn dev, as we would via the command line 
CMD ["yarn", "dev"]
