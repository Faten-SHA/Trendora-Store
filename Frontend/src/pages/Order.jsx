import { FaCheckCircle } from "react-icons/fa";
import StarRatings from "react-star-ratings";
import {Link} from "react-router-dom";

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800">
            Thank You For Shopping With Us!
          </h1>
          <p className="text-gray-600 mt-2">
            Here are the details of your recent orders.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Order #1</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg ">
              <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>

              <div className="flex flex-col">
                <div className="mb-6 border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-evenly ">
                    <img
                      src="/bag1.png"
                      alt=""
                      className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex-1 ml-4">
                      <h4 className="text-lg font-semibold">
                        Test Product Name
                      </h4>
                      <p className="text-gray-600">Quantity: 2</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">$50.00</p>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="my-3">Do you like it! Rate it!</h3>
                    <StarRatings
                      rating={2.403}
                      starDimension="25px"
                      starSpacing="5px"
                      starRatedColor="rgb(208, 204, 200)"
                    />
                    <textarea
                      name=""
                      id=""
                      placeholder="leave a feedback"
                      className="p-[10px] w-[300px] mt-3"
                      mt-3
                    ></textarea>
                    <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white">
                      Submit
                    </button>
                  </div>
                </div>

                <div className="mb-6 border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-evenly">
                    <img
                      src="/bag1.png"
                      alt=""
                      className="w-24 h-24 rounded-md object-cover"
                    />
                    <div className="flex-1 ml-4">
                      <h4 className="text-lg font-semibold">
                        Test Product Name
                      </h4>
                      <p className="text-gray-600">Quantity: 2</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">$50.00</p>
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="my-3">Do you like it! Rate it!</h3>
                    <StarRatings
                      rating={2.403}
                      starDimension="25px"
                      starSpacing="5px"
                      starRatedColor="rgb(208, 204, 200)"
                    />
                    <textarea
                      name=""
                      id=""
                      placeholder="leave a feedback"
                      className="p-[10px] w-[300px] mt-3"
                      mt-3
                    ></textarea>
                    <button className="bg-[#1e1e1e] mt-3 w-[200px] p-[5px] text-white">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg ">
          <h3 className="text-xl font-semibold mb-2">Shipping Information</h3>
          <p className="text-gray-600">fatenlahlouh@gmail.com</p>
          <p className="text-gray-600">+212 6 12 34 56 78</p>
          <p className="text-gray-600">Faten Lahlouh</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 my-4">
          <h3 className="text-xl font-semibold mb-2">Payment Method</h3>
          <p className="text-gray-600">VISA</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg ">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold">Subtotal:</span>
            <span className="text-lg font-semibold">$700</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold">Shipping:</span>
            <span className="text-lg font-semibold">$10</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-lg font-semibold">$710</span>
          </div>
        </div>
        <div className="mt-8 text-center">
            <Link to={"/"}>
            <button  className="bg-[#E82561] text-white p-3 rounded-lg font-semibold">Continue Shopping</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
