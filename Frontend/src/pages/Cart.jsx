import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="min-h-screen p-8">
      <h3 className="text-[18px] font-bold mb-6">Shopping Cart</h3>
      <div className="flex gap-8">
        {/* LEFT SIDE For showing cart items */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Items</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/bag1.png"
                alt="item image"
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Test Product title
                </h3>
                <p className="text-gray-600 mb-2">
                  Test Product description Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Architecto fugiat voluptas natus
                  dolorem. Esse nesciunt soluta dolore magni velit? Laboriosam
                  voluptate ab libero non explicabo qui, esse facere nisi
                  delectus.
                </p>
                <div className="flex items-center my-5 p-4">
                  <FaMinus className="bg-[#C30E59] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold mx-4">1</span>
                  <FaPlus className="bg-[#C30E59] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold mb-6">$90</p>
                <FaTrashAlt
                  className="text-red-500 cursor-pointer mt-2"
                  size={20}
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/bag1.png"
                alt="item image"
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Test Product title
                </h3>
                <p className="text-gray-600 mb-2">
                  Test Product description Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Architecto fugiat voluptas natus
                  dolorem. Esse nesciunt soluta dolore magni velit? Laboriosam
                  voluptate ab libero non explicabo qui, esse facere nisi
                  delectus.
                </p>
                <div className="flex items-center my-5 p-4">
                  <FaMinus className="bg-[#C30E59] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold mx-4">1</span>
                  <FaPlus className="bg-[#C30E59] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold mb-6">$90</p>
                <FaTrashAlt
                  className="text-red-500 cursor-pointer mt-2"
                  size={20}
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <img
                src="/bag1.png"
                alt="item image"
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Test Product title
                </h3>
                <p className="text-gray-600 mb-2">
                  Test Product description Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Architecto fugiat voluptas natus
                  dolorem. Esse nesciunt soluta dolore magni velit? Laboriosam
                  voluptate ab libero non explicabo qui, esse facere nisi
                  delectus.
                </p>
                <div className="flex items-center my-5 p-4">
                  <FaMinus className="bg-[#C30E59] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl" />
                  <span className="text-lg font-semibold mx-4">1</span>
                  <FaPlus className="bg-[#C30E59] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold mb-6">$90</p>
                <FaTrashAlt
                  className="text-red-500 cursor-pointer mt-2"
                  size={20}
                />
              </div>
            </div>
            <button className="bg-[#F2AE66] w-[200px] text-white p-3 mt-4 rounded-md font-semibold">
              Clear Cart
            </button>
          </div>
        </div>
        {/* RIGHT SIDE For showing total price and checkout button */}
        <div className="w-80 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-lg font-medium">$ 350</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Shipping</span>
              <span className="text-lg font-medium">$ 10</span>
            </div>

            <div className="flex justify-between">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-medium">$ 360</span>
            </div>
            <button className="bg-[#C30E59] text-white font-semibold text-lg w-full p-3 mt-4 rounded-md hover:bg-[#A50B4D] transition duration-300 ease-in-out">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
