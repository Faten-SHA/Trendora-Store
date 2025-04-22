import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import User from "../models/user.model.js";
dotenv.config();

const sendWelcomeEmail = async () => {
  const users = await User.find({ status: 0 }); // status 0 means that the user created in DB but email not sent yet
  if (users.length > 0) {
    for (let user of users) {
      ejs.renderFile(
        "templates/welcome.ejs",
        { name: user.name }, // Pass the user name to the template welcome.ejs
        async (err, data) => {
          let messageoptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: "Welcome to Trendora - Your Account is Created",
            html: data,
            
          };
          try {
            await sendMail(messageoptions);
            console.log("Email sent successfully to " + user.email);
            await User.findByIdAndUpdate(user._id, { $set: { status: 1 } }); // update the status to 1 means email sent successfully
          } catch (error) {
            console.log("Error occurred while sending email:", error);
          }
        }
      );
    }
  }
};

export default sendWelcomeEmail;
// This function will be called in the cron job to send welcome emails to users who have not received them yet
