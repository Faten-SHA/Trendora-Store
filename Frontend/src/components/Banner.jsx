const Banner = () => {
  return (
    <div className="relative bg-[url('/banner1.jpg')] bg-no-repeat bg-cover bg-center h-[80vh] px-[200px]">
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col text-white w-[50%] pt-[10%] ">
        <span className="text-[30px] mt-3  font-bold mb-4">
          Chic. Stylish. Yours. Discover our exclusive handbags – made to
          elevate every outfit!
        </span>
        <h1 className="text-2xl mt-3 font-bold">Style you can carry. Shop handbags now!</h1>
      
      <div className="flex items-center mt-[20px]">
        <button className="bg-[#C30E59] p-[10px] w-[200px] text-white cursor-pointer mr-9">Shop Now</button>
        <button className="bg-[#F2AE66] p-[10px] w-[230px] text-white cursor-pointer mr-9">CALL : +970 (955) 555-333</button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
