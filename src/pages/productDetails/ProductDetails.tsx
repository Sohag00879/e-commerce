import { useState } from "react";

const ProductDetails = () => {
    const [selectedSize, setSelectedSize] = useState('XS');
    // State for quantity
    const [quantity, setQuantity] = useState(2);

    // Array of available sizes
    const sizes = ['XL', 'XS', 'S', 'M', 'L'];
    // Array of image thumbnails (using placeholders for now)
    const thumbnails = [
        'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Thumb1',
        'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Thumb2',
        'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Thumb3',
        'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Thumb4',
        'https://placehold.co/100x100/A0A0A0/FFFFFF?text=Thumb5',
    ];

    // Function to handle size selection
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    // Function to increase quantity
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to decrease quantity
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-800 flex flex-col items-center p-4 md:p-8">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row p-6 md:p-8 space-y-6 lg:space-y-0 lg:space-x-8">

                {/* Product Image Section */}
                <div className="w-full lg:w-2/5 flex flex-col items-center space-y-4">
                    {/* Main Product Image */}
                    <div className="w-full bg-gray-200 rounded-lg overflow-hidden flex justify-center items-center p-4">
                        <img
                            src="https://placehold.co/400x500/D3D3D3/000000?text=Product+Image"
                            alt="Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt."
                            className="max-w-full h-auto rounded-lg"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x500/D3D3D3/000000?text=Image+Unavailable'; }}
                        />
                    </div>
                    {/* Product Thumbnails */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {thumbnails.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-16 h-16 md:w-20 md:h-20 rounded-lg border border-gray-300 cursor-pointer hover:border-blue-500 transition-all duration-200"
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/A0A0A0/FFFFFF?text=Error'; }}
                            />
                        ))}
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="w-full lg:w-3/5 flex flex-col space-y-6">
                    {/* Product Title */}
                    <h1 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900">
                        Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt.
                    </h1>

                    {/* Rating Section */}
                    <div className="flex items-center space-x-2 text-gray-600">
                        <div className="flex text-yellow-400">
                            {/* Star icons for rating */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z"></path></svg>
                        </div>
                        <span>4.7</span>
                        <span className="text-gray-400">•</span>
                        <span>2,254</span>
                        <svg className="w-4 h-4 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-baseline space-x-2">
                        <span className="text-3xl md:text-4xl font-bold text-teal-600">৳1,139.33</span>
                        <span className="text-lg md:text-xl line-through text-gray-400">৳1,500</span>
                    </div>

                    {/* Promotion Banner */}
                    <div className="bg-orange-100 border border-orange-300 text-orange-700 text-sm font-medium px-4 py-2 rounded-md inline-block">
                        Promotion <span className="font-bold">Min. spend ৳550</span>
                        <svg className="w-4 h-4 inline-block ml-2 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>

                    {/* Available Color */}
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700 font-medium">Available Color:</span>
                        <span className="font-semibold text-gray-900">Navy Blue</span>
                        {/* Color swatches */}
                        <div className="flex space-x-2">
                            <div className="w-8 h-8 rounded-full border-2 border-blue-500 bg-blue-700 cursor-pointer"></div>
                            <div className="w-8 h-8 rounded-full border border-gray-300 bg-red-700 cursor-pointer"></div>
                            <div className="w-8 h-8 rounded-full border border-gray-300 bg-black cursor-pointer"></div>
                        </div>
                    </div>

                    {/* Select Size Section */}
                    <div>
                        <span className="text-gray-700 font-medium block mb-2">Select Size: <span className="font-semibold">{selectedSize}</span></span>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeClick(size)}
                                    className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200
                    ${selectedSize === size
                                            ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-gray-500'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Section */}
                    <div>
                        <span className="text-gray-700 font-medium block mb-2">Quantity</span>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={decreaseQuantity}
                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-lg font-bold"
                            >
                                -
                            </button>
                            <span className="px-4 py-1 border border-gray-300 rounded-lg text-lg font-medium">{quantity < 10 ? `0${quantity}` : quantity}</span>
                            <button
                                onClick={increaseQuantity}
                                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 text-lg font-bold"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 text-lg">
                        Add to Cart
                    </button>
                </div>

                {/* Delivery and Seller Info Section (Right Column) */}
                <div className="w-full lg:w-1/3 flex flex-col space-y-6 lg:ml-8 mt-6 lg:mt-0">
                    {/* Delivery Options */}
                    <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-base font-semibold text-gray-800 mb-4">Delivery Options</h3>
                        <div className="space-y-4">
                            {/* Regular Delivery */}
                            <div className="flex items-start space-x-3">
                                <input type="radio" id="regular" name="delivery" className="mt-1.5 accent-teal-600" defaultChecked />
                                <label htmlFor="regular" className="flex flex-col">
                                    <span className="font-medium text-gray-800">Regular</span>
                                    <span className="text-sm text-gray-500">Delivery within 2-3 days</span>
                                </label>
                            </div>
                            {/* Express Delivery (Not Available) */}
                            <div className="flex items-start space-x-3 opacity-60 cursor-not-allowed">
                                <input type="radio" id="express" name="delivery" className="mt-1.5" disabled />
                                <label htmlFor="express" className="flex flex-col">
                                    <span className="font-medium text-gray-500">Express <span className="text-red-500">(Not Available)</span></span>
                                    <span className="text-sm text-gray-400">Delivery within 24 hours</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Sold By Section */}
                    <div className="p-5 bg-white rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-base font-semibold text-gray-800 mb-4">Sold by</h3>
                        <div className="flex items-center space-x-3 mb-4">
                            <img src="https://placehold.co/40x40/E0E0E0/000000?text=Logo" alt="BD Fashion House Logo" className="w-10 h-10 rounded-full" />
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-800">BD FASHION HOUSE</span>
                                <span className="flex items-center text-sm text-blue-600">
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    <span>Verified</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex space-x-2 mb-4">
                            <button className="flex-1 py-2 text-sm font-medium text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50 transition-colors duration-200">
                                Chat Now
                            </button>
                            <button className="flex-1 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                View Shop
                            </button>
                        </div>
                        {/* Shop Rating */}
                        <div className="grid grid-cols-3 gap-2 text-center text-sm mt-4">
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-900">100%</span>
                                <span className="text-gray-500">Ship on Time</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-900">90%</span>
                                <span className="text-gray-500">Chat Response</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-900">99.8%</span>
                                <span className="text-gray-500">Shop Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Like and Share Buttons */}
                    <div className="flex justify-end space-x-4 mt-4 text-gray-600">
                        <button className="flex items-center space-x-1 hover:text-red-500 transition-colors duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            <span className="hidden sm:inline">Like</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6L15.316 6.658m0 0a3 3 0 100-2.684 3 3 0 000 2.684z"></path></svg>
                            <span className="hidden sm:inline">Share</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-gray-900 transition-colors duration-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span className="hidden sm:inline">Settings</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductDetails