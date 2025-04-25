import Products from "../components/Products";

const ProductsList = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 ">
      <div className="flex justify-between m-4">
        {/* LEFT PART */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Filter Products</span>
          <select name="cetegory" id="" className="p-2 mb-4 sm:mb-0 sm:mr-4">
            <option value="category" className="font-semibold">
              Category
            </option>
            <option value="handbags">Handbags</option>
            <option value="shoulder-bags">Shoulder Bags</option>
            <option value="crossbody-bags">Crossbody Bags</option>
            <option value="backpacks">Backpacks</option>
            <option value="tote-bags">Tote Bags</option>
            <option value="clutches">Clutches</option>
            <option value="evening-bags">Evening Bags</option>
            <option value="travel-bags">Travel Bags</option>
            <option value="eco-friendly">Eco-Friendly</option>
          </select>

          <select id="" name="occasion" className="p-2 mb-4 sm:mb-0 sm:mr-4">
            <option value="occasion" className="font-semibold">
              Occasion
            </option>
            <option value="casual">Casual</option>
            <option value="work">Work</option>
            <option value="travel">Travel</option>
            <option value="evening">Evening Events</option>
            <option value="wedding">Weddings</option>
            <option value="party">Parties</option>
            <option value="daily">Everyday Use</option>
            <option value="formal">Formal</option>
            <option value="gifts">Gift Ideas</option>
          </select>
        </div>

        {/* RIGHT PART */}
        <div className="flex flex-col sm:flex-row sm:items-center">
          <span className="text-lg font-semibold mr-4">Sort Products</span>
          <select name="price" id="">
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductsList;
