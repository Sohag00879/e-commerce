import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Description = ({ desc = "" }) => {
    const [showMore, setShowMore] = useState(false);

    const isLong = desc.length > 220;
    const firstPart = desc.slice(0, 220);
    const remainingPart = desc.slice(220);

    return (
        <div className="rounded-md shadow-sm text-gray-800 bg-white max-w-7xl mx-auto p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-6">Description</h2>

            <div className="text-sm sm:text-base leading-relaxed space-y-2 text-gray-700">
                <p>
                    {showMore || !isLong ? desc : `${firstPart}...`}
                </p>
                {showMore && isLong && (
                    <p className="text-gray-400">{remainingPart}</p>
                )}
            </div>

            {isLong && (
                <div className="flex justify-center">
                    <button
                        className="flex items-center gap-1 text-sm text-black font-medium hover:underline"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {isLong ? "See Less" : "See More"}
                        {isLong ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Description;
