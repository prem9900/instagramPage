# Use Node.js 18 as the base image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files into container
COPY . .

# Build the React app (or your frontend)
RUN npm run build

# Install serve to serve the build folder (if React)
RUN npm install -g serve

# Expose port 3000 for the container
EXPOSE 3000

# Command to serve the build directory on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]
