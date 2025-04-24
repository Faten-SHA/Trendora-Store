import StarRatings from "react-star-ratings";
import {FaMinus , FaPlus} from "react-icons/fa";

const Product = () => {
  return (
    <div className=" h-auto flex justify-stretch p-[30px]">
      {/* LEFT SIDE */}
      <div className="flex-1 h-[500px] w-[600px]">
        <img
          src="/bag1.png"
          alt="product image"
          className="h-[100%] w-[100%] object-cover"
        />
      </div>

      {/* Right SIDE */}
      <div className="flex flex-1 flex-col ml-10">
        <h2 className="text-[25px] font-semibold mb-[2px]">
          Test Product Name
        </h2>
        <span>
          Test product description. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quisquam, voluptatibus.
        </span>
        <h2 className="font-semibold mt-4 mb-4 text-[20px] ">$90</h2>
        <span className="flex items-center mb-3">
          <StarRatings
            rating={2.403}
            starDimension="25px"
            starSpacing="5px"
            starRatedColor="rgb(242, 174, 102)"
          />{" "}
          (3)
        </span>

        <div className="mt-5 h-52 w-96 border-2 border-gray-300 rounded-lg p-4 flex flex-col justify-between shadow-md ">
          <h2 className="flex items-center justify-center font-semibold text-lg text-gray-700">
            Material & Care
          </h2>
          <hr className="mb-4" />
          <span className="block text-gray-600 text-base text-[18px]">
            Material: 100% Genuine Leather Lining: Polyester Fabric Care Tips:
            Wipe clean with a soft, dry cloth Avoid prolonged exposure to direct
            sunlight Store in a cool, dry place when not in use Use leather
            conditioner occasionally to maintain texture
          </span>
        </div>
        <div className=" my-4 inline-flex items-center bg-[#E8E7AB] text-white font-semibold text-sm p-3 rounded-full shadow-md">
           Wholsale Available: %70 as from 10 pcs
        </div>
        <div className="flex items-center my-5 p-4">
         <FaMinus className="bg-[#C30E59] text-white cursor-pointer p-2 rounded-full mr-4 text-3xl"/>
            <span className="text-lg font-semibold mx-4">1</span>
            <FaPlus className="bg-[#C30E59] text-white cursor-pointer p-2 rounded-full ml-4 text-3xl"/>
        </div>
        <button className="bg-[#C30E59] text-white font-semibold text-lg p-[10px] w-[200px] rounded-lg shadow-md hover:bg-[#A50B4D] transition duration-300 ease-in-out">
          Add to Cart
        </button>
        <hr className="my-6"/>
        <div className="flex flex-col">
            <h2 className="font-semibold text-[18px]">Reviews</h2>
        <div className="flex items-center">
        <StarRatings
            rating={2.403}
            starDimension="25px"
            starSpacing="5px"
            starRatedColor="rgb(242, 174, 102)"
          />
          <span className="font-semibold mx-[20px]">Faten L.</span>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
