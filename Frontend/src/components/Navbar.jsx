import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge } from "@mui/material";
import logo from '../assets/Trendoralogo.png';


const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] shadow-md bg-white">
      <div className="cursor-pointer m-2 ml-8">
      <img src={logo} alt="Trendora logo" height={90} width={90} />
      </div>
      <div className="flex items-center m-2">
        <input
          type="text"
          placeholder="search for an item"
          className="p-[15px] border-2 border-[#E82561] border-solid w-[500px] outline-none rounded-lg mr-[-30px]"
        />
        <FaSearch className="text-[20px] cursor-pointer" />
      </div>
      
      <div className="flex items-center">
        <div className="mr-[20px] cursor-pointer">
        <Badge badgeContent={4} color="secondary" className="cursor-pointer">
      <ShoppingBasketIcon className="text-pink-500"/>
      </Badge>
        </div>
        <div className="flex items-center space-x-2 border border-pink-300 p-2 rounded-lg hover:bg-pink-100 cursor-pointer duration-300 m-8">
          <FaUser className="text-[#E82561] hover:text-pink-600 transition duration-600" />
          <span className="text-[#E82561] hover:text-pink-600 font-semibold">
            Login
          </span>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
