import { useParams } from 'react-router-dom';
import SellerAndDelivery from '../../components/ProductDetails/SellerAndDelivery';
import Loading from '../../components/ui/Loading';
import Breadcrumb from '../../components/ui/navbar/Breadcrumb';
import { useSingleProductQuery } from '../../redux/features/product/getSingleProductApi';
import Description from './Description';
import ProductData from './ProductData';
import Specifications from './Specifications';

const ProductDetails = () => {
  const params = useParams();
  const { data, isLoading } = useSingleProductQuery(params.slug)

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-28 sm:px-6 md:px-10 py-6 font-sans max-w-7xl mx-auto px-4 ">
        {/* Details Section */}
        <div className="w-full lg:w-2/3">
          <ProductData productData={data?.data} />
        </div>

        {/* Seller & Delivery Section */}
        <div className="w-full lg:w-1/3">
          <SellerAndDelivery shopName={data?.data?.merchant?.shop_name} />
        </div>
      </div>

      <div className='bg-[#F1F5F9] pt-4 pb-16 space-y-3 px-4'>
        {/* description */}
        <Description desc={data?.data?.description} />

        {/* Specifications Section */}
        <Specifications productData={data?.data} />
      </div>
    </>
  );
};

export default ProductDetails;
