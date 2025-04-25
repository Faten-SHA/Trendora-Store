import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaUser,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

const Menu = () => {
  return (
    <div className="h-[100vh] bg-gray-100 p-[20px] w-[300px] shadow-lg">
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">
        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:bg-pink-100 hover:text-white">
          <FaHome className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Home
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaUser className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Profile
        </li>

        <hr className="w-full my-[2-px] border-gray-300" />
        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaUser className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Users
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaBox className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Products
        </li>
        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaClipboardList className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Orders
        </li>
        <hr className="w-full my-[2-px] border-gray-300" />
        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaElementor className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Banners
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaCog className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Settings
        </li>
        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaHdd className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Backups
        </li>

        <hr className="w-full my-[2-px] border-gray-300" />

        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaChartBar className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Charts
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaClipboard className="mr-[15px] text-['rgb(232, 37, 97)']" />
          All Logs
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mb-[20px] transition-colors duration-100 hover:text-blue-500">
          <FaSignOutAlt className="mr-[15px] text-['rgb(232, 37, 97)']" />
          Signout
        </li>
      </ul>
    </div>
  );
};

export default Menu;
