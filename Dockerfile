# Use official Node.js LTS image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only package files first (for layer caching)
COPY package.json ./
RUN npm install

# Copy the rest of the application, including public folder and calculator.html
COPY . .

# Make sure public folder and calculator.html exist
# Optional: You can add checks or ignore rules in .dockerignore

# Expose the port the app runs on
EXPOSE 3111

# Start the app
CMD ["node", "server.js"]
