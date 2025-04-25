import { FaPlus, FaTrash } from 'react-icons/fa';
import axios from "axios"
import { userRequest } from '../requestMethods';
import { useState } from 'react';

const NewProduct = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inputs, setInputs] = useState({});
  const [uploading, setUploading] = useState("Uploading is 0%");
  const [selectedOptions, setSelectedOptions] = useState({
    category: [],
    occasion: [],
    color:[],
  });


  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
    }
  }

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: [...(prev[name] || []), value],
    }));
  };

  const handleRemoveOption = (name, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [name]: prev[name].filter((options) => options !== value)
    }));
  }

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleUpload = async(e) =>{
    e.preventDefault();
    const data = new FormData();
    data.append("file", selectedImage);
    data.append("upload_preset", "uploads");

    setUploading("Uploading ...")
    try {
      
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dvi3r8clf/image/upload",
        data
      );

      const {url} = uploadRes.data;

      setUploading("Uploaded 100%")
      await userRequest.post("/products", {img: url, ...inputs, ...selectedOptions})
    } catch (error) {
      console.log(error);
      setUploading("Uploading failed")
      
    }


  }
  return (
    <div className="p-5">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-2xl font-semibold">New Product</h1>
      </div>

      <div className="mt-5 bg-white p-5 shadow-lg rounded-lg">

        <form className="flex flex-col md:flex-row rounded-lg">

          {/* LEFT */}

          <div className="flex-1 space-y-5">

            <div>

              <label htmlFor="" className="font-semibold">
                Product Image:
              </label>
              
              {!selectedImage ? (
                <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md flex items-center justify-center">
                  <label htmlFor="file" className="cursor-pointer">
                    <FaPlus className="text-[20px]" />
                  </label>
                </div>
              ) : (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Product"
                  className="h-[100px] w-[100px] object-cover rounded-md"
                />
              )}
              <input
                type="file"
                id="file"
                onChange={imageChange}
                style={{ display: "none" }}
              />
            </div>

            <span className='text-green-500'>{uploading}</span>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                name="title"
                id=""
                placeholder="Product Name"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Description
              </label>
              <textarea
                type="text"
                cols={15}
                rows={7}
                name="desc"
                onChange={handleChange}
                id=""
                placeholder="Product Description"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Original Price
              </label>
              <input
                type="number"
                name="originalPrice"
                id=""
                onChange={handleChange}
                placeholder="$100"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Product Discounted Price
              </label>
              <input
                type="number"
                name="discountedPrice"
                id=""
                onChange={handleChange}
                placeholder="$80"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

          </div>

          {/* RIGHT */}

          <div className="ml-5 flex-1 space-y-5">
            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Wholesale Price
              </label>
              <input
                type="number"
                name="wholesalePrice"
                onChange={handleChange}
                id=""
                placeholder="$70"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Wholesale Minimum Quantity
              </label>
              <input
                type="number"
                name="wholesaleMinimumQuantity"
                onChange={handleChange}
                id=""
                placeholder="10"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                id=""
                onChange={handleChange}
                placeholder="Mui Mui"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Category
              </label>
              <select
                name="category"
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
                onChange={handleSelectChange}
              >
                <option disabled defaultValue={true}>
                  Select Category
                </option>
                <option>Handbags</option>
            <option>Shoulder Bags</option>
            <option>Crossbody Bags</option>
            <option>Backpacks</option>
            <option>Tote Bags</option>
            <option>Clutches</option>
            <option>Evening Bags</option>
            <option>Travel Bags</option>
            <option>Eco-Friendly</option>

              </select>
            </div>

            <div className="mt-2">
                {selectedOptions.category.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <span>{option}</span>
                    <FaTrash
                      className="cursor-pointer text-red-500"
                      onClick={() => handleRemoveOption("category", option)}
                    />
                  </div>
                ))}
              </div>

            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Occasion
              </label>
              <select
                name="occasion"
                id=""
                onChange={handleSelectChange}
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Select Occasion
                </option>
                <option>Casual</option>
            <option>Work</option>
            <option>Travel</option>
            <option>Evening Events</option>
            <option>Weddings</option>
            <option>Parties</option>
            <option>Everyday Use</option>
            <option>Formal</option>
            <option>Gift Ideas</option>

              </select>
            </div>
            <div className="mt-2">
                {selectedOptions.occasion.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <span>{option}</span>
                    <FaTrash
                      className="cursor-pointer text-red-500"
                      onClick={() => handleRemoveOption("occasion", option)}
                    />
                  </div>
                ))}
              </div>


            <div>
              <label htmlFor="" className="block mb-2 font-semibold">
                Color
              </label>
              <select
                name="color"
                onChange={handleSelectChange}
                id=""
                className="border-2 border-[#444] border-solid p-2 mb-4 sm:mb-0 sm:mr-4"
              >
                <option disabled defaultValue={true}>
                  Color
                </option>
                <option>White</option>
                <option>Black</option>
                <option>Gold</option>
                <option>Silver</option>
                <option>Others</option>

              </select>
            </div>
            <div className="mt-2">
                {selectedOptions.color.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <span>{option}</span>
                    <FaTrash
                      className="cursor-pointer text-red-500"
                      onClick={() => handleRemoveOption("color", option)}
                    />
                  </div>
                ))}
              </div>


            <button className='bg-slate-500 text-white py-2 px-4 rounded' onClick={handleUpload}>Create</button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default NewProduct;