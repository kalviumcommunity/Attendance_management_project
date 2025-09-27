# my-app/Dockerfile

# --- Build Stage ---
FROM node:18-alpine as builder

WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install --production # Only install production dependencies here

# Copy the rest of the application source code
COPY . .

# --- Production Stage ---
FROM node:18-alpine

WORKDIR /app

# Create a non-root user and group
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
USER appuser

# Copy only the necessary files from the build stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public # Copy static assets

# Expose the port your application listens on
EXPOSE 3000

# Command to run the application
CMD ["node", "src/app.js"]