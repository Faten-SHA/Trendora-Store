import StarRatings from "react-star-ratings";

const Product = ({img}) => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center h-[500px] m-[20px] cursor-pointer bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img
          src={img}
          alt="Product image"
          className="h-[400px] w-[320px] bg-cover"
        />
        <h2 className="font-semibold text-[18px] w-[300px]">
          {" "}
          Product 1 name with some Description{" "}
        </h2>
        <span className="font-semibold text-[18px] flex items-center justify-center">
          $100
        </span>
        <span className="flex items-center mb-3">
          <StarRatings
            rating={2.403}
            starDimension="25px"
            starSpacing="5px"
            starRatedColor="rgb(242, 174, 102)"
          /> (3)
        </span>
      </div>
    </div>
  )
}

export default Product