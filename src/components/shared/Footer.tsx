import { FaInstagram, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import american from '../../assets/american.png';
import apple from '../../assets/apple.png';
import visa from '../../assets/Badge.png';
import bkash from '../../assets/bkash.png';
import headphone from '../../assets/content.png';
import logo from '../../assets/fi_14098967.png';
import google from '../../assets/Google.png';
import masterCard from '../../assets/master-card.png';
import nagad from '../../assets/nagad.png';
const Footer = () => {
    return (
        <div className="bg-gray-100">
            <footer className="bg-slate-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                        <div className="lg:col-span-1">
                            {/* Logo */}
                            <div className="flex items-center mb-6 gap-x-2">
                                <img src={logo} alt="logo" />
                                <span className="text-xl sm:text-2xl font-bold tracking-wider uppercase">Falcon</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                                Experience our new platform & Enjoy <br />
                                exiting deals and offers on your day to <br />
                                day
                            </p>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <FaMapMarkerAlt className="w-3 h-3 text-slate-800" />
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        House #64, Road 13, ASA Center, <br />
                                        Uttara, Dhaka-1402
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <IoCall className="w-3 h-3 text-slate-800" />
                                    </div>
                                    <span className="text-sm text-gray-300">01729-1497201</span>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                        <IoMdMail className="w-3 h-3 text-slate-800" />
                                    </div>
                                    <span className="text-sm text-gray-300">falcon@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div className="lg:col-span-1">
                            <h3 className="text-lg font-semibold mb-6 text-gray-400">ABOUT</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Contact Us</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Careers</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Press</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Cancellation & Returns</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Terms of Use</a></li>
                            </ul>
                        </div>

                        {/* Help Section */}
                        <div className="lg:col-span-1">
                            <h3 className="text-lg font-semibold mb-6 text-gray-400">HELP</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Payments</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Shipping</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">My Orders</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">FAQs</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Terms of Use</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Security</a></li>
                                <li><a href="#" className="text-sm text-white hover:text-gray-300 transition-colors">Privacy</a></li>
                            </ul>
                        </div>

                        <div className="lg:col-span-1">
                            {/* Need Support */}
                            <div className="mb-8">
                                <h3 className="text-lg font-medium mb-4 text-gray-300">Need Support?</h3>
                                <div className="border border-gray-600 rounded px-4 py-2 inline-flex items-center">
                                    <img src={headphone} alt="icon" className="mr-2" />
                                    <span className="text-sm font-medium">10724-7814XX</span>
                                </div>
                            </div>

                            {/* Download App */}
                            <div>
                                <h3 className="text-lg font-medium mb-4 text-gray-300">DOWNLOAD APP</h3>
                                <div className="space-y-3">
                                    <a href="#" className="block">
                                        <div className="flex items-center transition-colors">
                                            <div>
                                                <img src={google} alt="google-icon" />
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="block">
                                        <div className="flex items-center transition-colors">

                                            <div>
                                                <img src={apple} alt="apple-icon" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 border-gray-700">
                        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
                            {/* Social Media */}
                            <div className="flex items-center space-x-4">
                                <span className="text-sm text-gray-400">Follow us on</span>
                                <div className="flex space-x-3">
                                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors text-black">
                                        <TiSocialFacebook className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-gray-200 text-black rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                                        <FaInstagram className="w-6 h-6" />
                                    </a>
                                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors text-black">
                                        <FaTwitter className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="flex flex-col lg:flex-row items-center gap-2">
                                <span className="text-sm text-gray-400">PAYMENTS ACCEPTED</span>
                                <div className="flex items-center flex-wrap">
                                    <img src={visa} alt="visa" className="h-16 w-auto" />
                                    <img src={masterCard} alt="master-card" className="h-16 w-auto" />
                                    <img src={american} alt="american" className="h-16 w-auto" />
                                    <img src={bkash} alt="bkash" className="h-16 w-auto" />
                                    <img src={nagad} alt="nagad" className="h-16 w-auto" />
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                        <p className="text-sm text-white">
                            Falcon ©2025. Design by <span className="text-white">xyz</span>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer