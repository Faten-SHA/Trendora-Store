import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js"; 
import cron from "node-cron";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js"; 
import sendPendingOrderEmail from "./EmailServices/sendPendingOrderEmail.js"; 
import sendDeliveredOrderEmail from "./EmailServices/sendDeliveredOrderEmail.js";
import sendPromotionEmail from "./EmailServices/sendPromotionemail.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// SCHEDULE SERVICES
//https://crontab.guru/ this website is used to help with the cron job schedule

const services = () => {
  cron.schedule("* * * * * *", () => {
    sendWelcomeEmail();
    sendPendingOrderEmail(); 
    sendDeliveredOrderEmail;
  });
};


//Schedule Promotion email 
const promotion = () => {
  cron.schedule("30 12 * * 5", () => {
   sendPromotionEmail(); // Call the function to send promotion emails
  });
};

services(); // Call the services function to start the cron job
promotion(); // Call the promotion function to start the cron job

app.listen(PORT, () => {
  console.log(`Background services is running on port ${PORT}`);
  dbConnection(); // Call the dbConnection function to connect to the database
});
