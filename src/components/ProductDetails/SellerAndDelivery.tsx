import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import expressIcon from '../../assets/express.png';
import regularIcon from '../../assets/regular.png';
import risingStar from '../../assets/rising-start.png';
import soldby from '../../assets/sold-by.png';
import verify from '../../assets/verify.png';

const SellerAndDelivery = ({ shopName }: { shopName: string }) => {
    return (
        <div className="w-full space-y-4">
            {/* Delivery Options */}
            <div className="border p-4 rounded-xl">
                <div className="text-gray-700 font-semibold mb-2 text-lg sm:text-xl">
                    Delivery Options
                </div>
                <div className="text-sm">
                    {/* Regular */}
                    <div className="flex items-start gap-2">
                        <div className="mt-1 shrink-0">
                            <img src={regularIcon} alt="regular" className="w-6 h-6 sm:w-auto sm:h-auto" />
                        </div>
                        <div>
                            <div className="text-gray-900 font-semibold text-base sm:text-lg">
                                Regular
                            </div>
                            <div className="text-gray-500 text-xs sm:text-sm">
                                Delivery within 2-3 days
                            </div>
                        </div>
                    </div>

                    {/* Express */}
                    <div className="flex items-start gap-2 mt-5">
                        <div className="mt-2 shrink-0">
                            <img src={expressIcon} alt="express" className="w-6 h-6 sm:w-auto sm:h-auto" />
                        </div>
                        <div>
                            <div className="text-gray-300 font-semibold text-base sm:text-lg mt-1">
                                Express <span className="text-red-500 ml-1 text-xs sm:text-sm">Not Available</span>
                            </div>
                            <div className="text-gray-400 text-xs sm:text-sm">
                                Delivery within 24 Hours.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sold By Section */}
            <div className="border p-4 rounded-xl">
                <p className="font-semibold text-base sm:text-lg">Sold by</p>

                <div className="mb-5">
                    <div className="flex items-center gap-2">
                        <img src={soldby} alt="sold-by" className="w-10 h-10" />
                        <div className="w-full">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-neutral-600 font-semibold text-sm sm:text-base">{shopName}</span>
                                <img src={verify} alt="verify-img" className="w-4 h-4 sm:w-auto sm:h-auto" />
                            </div>
                            <div className="flex justify-start mt-4">
                                <img src={risingStar} alt="rising-star" className="max-w-[100px] sm:max-w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch gap-2 mb-4">
                    <button className="bg-[#E6F8F4] text-green-700 text-sm py-2 sm:py-1.5 rounded w-full font-medium flex items-center gap-x-2 justify-center">
                        <IoChatbubbleEllipsesOutline />
                        Chat Now
                    </button>
                    <button className="bg-[#F1F5F9] text-gray-800 text-sm py-2 sm:py-1.5 rounded w-full font-medium">
                        View Shop
                    </button>
                </div>

                {/* Stats */}
                <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600 mt-2 gap-4 sm:gap-0">
                    <div className="flex-1 text-center sm:text-left">
                        <div>Ship on Time</div>
                        <div className="font-semibold text-black text-lg sm:text-2xl">
                            <span className="text-gray-600">100%</span>
                        </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <div>Chat Response</div>
                        <div className="font-semibold text-black text-lg sm:text-2xl">
                            <span className="text-gray-600">90%</span>
                        </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                        <div>Shop Rating</div>
                        <div className="font-semibold text-black text-lg sm:text-2xl">
                            <span className="text-gray-600">99.8</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerAndDelivery;
