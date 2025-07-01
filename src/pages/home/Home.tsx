/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import Loading from '../../components/ui/Loading';
import { useAllProductsQuery } from '../../redux/features/product/getAllProductsApi';

const Home = () => {
  const { data, isLoading, isError } = useAllProductsQuery(undefined);
  const productData = data?.data || [];

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="p-6 text-center text-red-500">Failed to load products.</div>;
  }

  if (productData.length === 0) {
    return <p className="p-6 text-center text-gray-700">No products available.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {productData.map((product: any) => {
        const {
          id,
          name,
          thumbnail,
          discount_price,
          regular_price,
          rating_avg,
          description,
          slug,
        } = product;

        return (
          <div
            key={id}
            className="bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out flex flex-col transform-gpu hover:shadow-lg hover:scale-[1.05] cursor-pointer"
          >
            <img
              src={thumbnail}
              alt={name || "Product image"}
              className="w-full h-52 object-cover rounded-t-lg"
              loading="lazy"
            />

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-1 truncate" title={name}>
                {name}
              </h3>

              <div className="flex items-center mb-2 space-x-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 fill-current ${i < Math.round(rating_avg) ? "text-yellow-400" : "text-gray-300"
                        }`}
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.955L10 0l2.948 5.955 6.562.955-4.755 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">{rating_avg?.toFixed(1) || "0.0"}</span>
              </div>

              <div className="mb-3 text-lg font-bold text-teal-600 flex items-center space-x-2">
                {discount_price ? (
                  <>
                    <div className='flex gap-x-2'>
                      <span>৳{discount_price?.toLocaleString()}</span>
                      <span className="line-through text-gray-400 text-base font-normal">
                        ৳{regular_price?.toLocaleString()}
                      </span>
                    </div>

                  </>
                ) : (
                  <span>৳{regular_price?.toLocaleString()}</span>
                )}
              </div>

              {description && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
              )}

              <Link
                to={`/product/${slug}`}
                className="mt-auto block text-center bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md font-semibold transition-colors"
              >
                View Product
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
