from node:20

WORKDIR /app

COPY package*.json .


RUN npm install

COPY . .
RUN npm run build

# Install PM2 globally
RUN npm install pm2 -g

# Expose the port the app runs on
EXPOSE 3000

# Start the application using PM2
CMD ["pm2-runtime", "start", "pm2.config.js"]