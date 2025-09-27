# Step 1: Use official Node.js image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all source code
COPY . .

# Step 6: Expose port 3000 to outside world
EXPOSE 3000

# Step 7: Start the app
CMD ["npm", "start"]


# Use a smaller base image for reduced size
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy only package files first (to leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

