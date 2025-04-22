import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
dotenv.config();

const sendPromotionEmail = async () => {
  const users = await User.find({}); // Fetch all users from the database
  const products = await Product.aggregate([
    { $sample: { size: 3 } }, // Randomly select 3 products
  ]);
  for (let user of users) {
    ejs.renderFile(
      "templates/promotion.ejs",
      {
         products
        }, 

      async (err, data) => {
        let messageoptions = {
          from: process.env.EMAIL,
          to: user.email,
          subject: "Special Promotion Just for You!",
          html: data,
        };
        try {
          await sendMail(messageoptions);
          console.log("Email sent successfully to " + user.email);
        } catch (error) {
          console.log("Error occurred while sending email:", error);
        }
      }
    );
  }
};

export default sendPromotionEmail;
