import { FaSpinner } from "react-icons/fa";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-[300px] w-full">
            <div className="flex flex-col items-center space-y-4">
                <FaSpinner className="animate-spin text-teal-600 text-4xl" />
                <p className="text-gray-600 text-base sm:text-lg font-medium">Loading, please wait...</p>
            </div>
        </div>
    );
};

export default Loading;
