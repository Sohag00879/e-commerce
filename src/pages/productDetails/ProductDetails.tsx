
import { useSingleProductQuery } from '../../redux/features/product/getSingleProductApi';
import ProductData from './ProductData';

const ProductDetails = () => {
    const {data} = useSingleProductQuery(undefined)
 
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 font-sans max-w-7xl mx-auto">


      {/* Details Section */}
      <ProductData productData={data?.data}/>

      {/* Seller & Delivery Section */}
      <div className="w-full lg:w-80 space-y-4">
        <div className="border p-4 rounded">
          <div className="text-gray-700 font-semibold mb-2">Delivery Options</div>
          <div className="text-sm">
            <div className="text-green-600">Regular</div>
            <div className="text-gray-500">Delivery within 2-3 days</div>
            <div className="text-gray-400 mt-1">Express <span className="text-red-500 ml-1">Not Available</span></div>
            <div className="text-gray-400 text-xs">Delivery within 24 Hours.</div>
          </div>
        </div>

        <div className="border p-4 rounded">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src="/pg.png" alt="P&G" className="w-6 h-6" />
              <span className="text-gray-700 font-semibold">BD FASHION HOUSE</span>
            </div>
            <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded">Rising Star</span>
          </div>
          <button className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded w-full">Chat Now</button>
          <button className="text-sm text-blue-500 mt-1 w-full">View Shop</button>

          <div className="flex justify-between text-xs text-gray-600 mt-2">
            <div>Ship on Time <div className="font-semibold text-black">100%</div></div>
            <div>Chat Response <div className="font-semibold text-black">90%</div></div>
            <div>Shop Rating <div className="font-semibold text-black">99.8%</div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;