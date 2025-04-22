import ejs from "ejs";
import dotenv from "dotenv";
import sendMail from "../helpers/sendMail.js";
import Order from "../models/order.model.js";
dotenv.config();


const sendPendingOrderEmail = async () => {
 const orders = await Order.find({ status: 0 }); // status 0 means user not received email
if(orders.length > 0) {
    for (let order of orders) {
      ejs.renderFile(
        "templates/pendingorder.ejs",
        { name: order.name,
            products: order.products,
         }, // Pass the user name to the template pendingOrder.ejs
        
        async (err, data) => {
          let messageoptions = {
            from: process.env.EMAIL,
            to: order.email,
            subject: "Your Order has been placed successfully",
            html: data,
          };
          try {
            await sendMail(messageoptions);
            console.log("Email sent successfully to " + order.email);
            await Order.findByIdAndUpdate(order._id, { $set: { status: 1 } }); // update the status to 1 means email sent successfully
          } catch (error) {
            console.log("Error occurred while sending email:", error);
          }
        }
      );
    }
  }

}

export default sendPendingOrderEmail;