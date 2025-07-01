import {
  Menu,
  Package,
  Search,
  ShoppingCart,
  Store,
  User
} from 'lucide-react';
import { useState } from 'react';
import { FaHeadphones } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/fi_14098967.png';
import { useAllCategoriesQuery } from '../../../redux/features/category/getAllCategoriesApi';
import { useAppSelector } from '../../../redux/hook';
import { RootState } from '../../../redux/store';
import { Category } from '../../../utils/types';

const Navbar = () => {
  const { data } = useAllCategoriesQuery(undefined);
  const [showCategories, setShowCategories] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { cartItems } = useAppSelector((state: RootState) => state.cart);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/my-cart')
  }
  const handleHome = () => {
    navigate('/')
  }

  return (
    <div>
      <div className="bg-gray-100 flex flex-col font-inter">
        {/* Header Section */}
        <header className="bg-[#1C2331] text-white py-3 px-3 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-x-2 sm:gap-x-1 mr-2 cursor-pointer" onClick={handleHome}>
            <img
              src={logo}
              alt=""
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />
            <span className="text-xs sm:text-base md:text-xl font-bold tracking-wider uppercase">
              Falcon
            </span>
          </div>


          {/* Search Bar */}
          <div className="flex flex-grow w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-4 sm:mx-6 md:mx-8">
            <input
              type="text"
              placeholder="Search for anything..."
              className="flex-grow p-2 sm:p-3 rounded-l-md outline-none text-gray-800 text-xs sm:text-sm placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all duration-200"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white p-2 sm:p-3 rounded-r-md flex items-center justify-center transition-colors duration-200">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>



          {/* Icons */}
          <div className="flex items-center space-x-3 sm:space-x-6 relative">
            {/* Shopping Cart */}
            <div className="relative" onClick={handleClick}>
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-gray-300 transition-colors duration-200" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-[#1C2331]">
                {totalItems}
              </span>
            </div>

            {/* User Icon with Dropdown */}
            <div className="relative">
              <User
                onClick={() => setShowProfile((prev) => !prev)}
                className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-gray-300 transition-colors duration-200"
              />
              {showProfile && (
                <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white text-gray-800 rounded-md shadow-lg py-2 z-50 text-xs sm:text-sm">
                  <a
                    href="/profile"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    My Profile
                  </a>
                  <a
                    href="/orders"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    My Orders
                  </a>
                  <a
                    href="/settings"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Settings
                  </a>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>

      {/* Navigation */}
      <nav className="bg-white text-gray-700 py-3 px-3 sm:px-6 md:px-8 lg:px-10 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          <div
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center space-x-1 cursor-pointer text-xs sm:text-sm font-semibold hover:text-teal-600 transition-colors duration-200"
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-teal-500 hover:text-teal-600" />
            <span>Categories</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-xs sm:text-sm font-medium flex-grow justify-center">
            {data?.data?.slice(0, 5).map((category: Category) => (
              <a
                key={category.id}
                href="#"
                className="hover:text-teal-600 transition-colors duration-200"
              >
                {category.name}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center space-x-3 lg:space-x-6 text-xs sm:text-sm font-medium">
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-teal-600 transition-colors duration-200"
            >
              <Package className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Track Order</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-teal-600 transition-colors duration-200"
            >
              <FaHeadphones className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Help Center</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 transition-colors duration-200 hover:text-teal-600"
            >
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
              <span>Sell With Us</span>
            </a>
          </div>
        </div>

        {/* Categories Dropdown */}
        {showCategories && (
          <div className="mt-2 bg-white shadow-md rounded-lg p-3 sm:p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 text-xs sm:text-sm">
            {data?.data?.map((category: Category) => (
              <a
                key={category.id}
                href="#"
                className="hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {category.name}
              </a>
            ))}
          </div>
        )}
      </nav>

    </div>
  );
};

export default Navbar;
