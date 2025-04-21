import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js"; // Import the dbConnection function
import cron from "node-cron";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// SCHEDULE SERVICES

const services = () => {
  cron.schedule("* * * * * *", () => {
    console.log("running a task every second"); //https://crontab.guru/ this website is used to help you with the cron job schedule
  });
};

services(); // Call the services function to start the cron job

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  dbConnection(); // Call the dbConnection function to connect to the database
});
