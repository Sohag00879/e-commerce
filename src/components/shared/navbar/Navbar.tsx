import { HelpCircle, Menu, Package, Search, ShoppingCart, Store, User } from 'lucide-react';
import { useState } from 'react';
import logo from '../../../assets/fi_14098967.png';
import { useAllCategoriesQuery } from '../../../redux/features/category/getAllCategoriesApi';
import Breadcrumb from '../ui/navbar/Breadcrumb';

const Navbar = () => {
  const { data } = useAllCategoriesQuery(undefined);
  const [showCategories, setShowCategories] = useState(false);
  return (
    <div>
      <div className="bg-gray-100 flex flex-col font-inter">
        {/* Header Section */}
        <header className="bg-[#1C2331] text-white py-4 px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="" />

            <span className="text-xl sm:text-2xl font-bold tracking-wider uppercase">Falcon</span>
          </div>

          {/* Search Bar */}
          <div className="flex flex-grow max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-4 sm:mx-6 md:mx-8">
            <input
              type="text"
              placeholder="Search for anything..."
              className="flex-grow p-2 sm:p-3 rounded-l-md outline-none text-gray-800 text-sm sm:text-base placeholder-gray-400 focus:ring-2 focus:ring-teal-500 transition-all duration-200"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white p-2 sm:p-3 rounded-r-md flex items-center justify-center transition-colors duration-200">
              <Search className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6 relative">
            {/* Shopping Cart Icon with Notification */}
            <div className="relative">
              <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-gray-300 transition-colors duration-200" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#1C2331]">
                12
              </span>
            </div>
            {/* User Icon */}
            <User className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-gray-300 transition-colors duration-200" />
          </div>
        </header>
      </div>

      <nav className="bg-white text-gray-700 py-3 px-4 sm:px-6 md:px-8 lg:px-10 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-y-2">
          {/* Categories Button */}
          <div
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center space-x-1 cursor-pointer text-sm sm:text-base font-semibold hover:text-teal-600 transition-colors duration-200"
          >
            <Menu className="w-5 h-5" />
            <span>Categories</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base font-medium flex-grow justify-center">

            {
              data?.data?.slice(0, 5).map((category, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-teal-600 transition-colors duration-200"
                >
                  {category.name}
                </a>
              ))
            }

          </div>

          {/* Right-aligned Links */}
          <div className="hidden sm:flex items-center space-x-4 lg:space-x-6 text-sm lg:text-base font-medium">
            <a href="#" className="flex items-center space-x-1 hover:text-teal-600 transition-colors duration-200">
              <Package className="w-5 h-5" />
              <span>Track Order</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-teal-600 transition-colors duration-200">
              <HelpCircle className="w-5 h-5" />
              <span>Help Center</span>
            </a>
            <a href="#" className="flex items-center space-x-1 hover:text-teal-600 transition-colors duration-200 text-teal-600">
              <Store className="w-5 h-5" />
              <span>Sell With Us</span>
            </a>
          </div>
        </div>

        {/* Dynamic Categories Dropdown - Shown when toggled */}
        {showCategories && (
          <div className="mt-2 bg-white shadow-md rounded-lg p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-sm sm:text-base">
            {data?.data?.map((category, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {category.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      {/* Breadcrumb */}
      <Breadcrumb />
    </div>

  );
};

export default Navbar;
