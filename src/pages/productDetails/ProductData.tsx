import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiShareNetworkLight } from "react-icons/pi";
import { toast } from "react-toastify";
import ProductDisplay from "../../components/ProductDetails/ProductDisplay";
import { addToCart } from "../../redux/features/addToCart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";

interface Attribute {
  name: string;
}

interface AttributeOption {
  attribute_value: string;
}

interface VariationAttribute {
  attribute: Attribute;
  attribute_option: AttributeOption;
}

interface Variation {
  id: number;
  image: string;
  discount_price: string;
  regular_price: string;
  variation_attributes: VariationAttribute[];
  id_delivery_fee: string;
}

interface ProductDetail {
  discount_price: string;
  regular_price: string;
}

interface Merchant {
  shop_name: string;
}

type TImage = {
  url: string;
};

interface ProductDataType {
  id: number;
  name: string;
  thumbnail: string;
  image: { [key: string]: TImage };
  rating_avg: number;
  rating_count: number;
  is_variant: boolean;
  variations: Variation[];
  product_detail: ProductDetail;
  merchant: Merchant;
  shipping_fee: string;
}

interface ProductDataProps {
  productData: ProductDataType;
}

const ProductData = ({ productData }: ProductDataProps) => {
  const { cartItems } = useAppSelector((state: RootState) => state.cart);
  const isVariant = productData?.is_variant;

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVariation, setSelectedVariation] = useState<Variation | null>(null);
  const [thumbnail, setThumbnail] = useState<string>(productData?.thumbnail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isVariant && Array.isArray(productData?.variations) && productData.variations.length > 0) {
      const firstVariation = productData.variations[0];
      setSelectedVariation(firstVariation);
      setThumbnail(firstVariation.image || productData.thumbnail);
    } else {
      setSelectedVariation(null);
      setThumbnail(productData?.thumbnail);
    }
    setQuantity(1);
  }, [productData, isVariant]);

  const handleVariationClick = (variation: Variation) => {
    setSelectedVariation(variation);
    setThumbnail(variation.image);
  };

  // ✅ Updated formatter for Bangladeshi Taka
  const formatBDT = (amount: number): string =>
    isNaN(amount)
      ? "৳0.00"
      : `৳${amount.toLocaleString("en-BD", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;

  const getPrice = (): number => {
    const discount = isVariant && selectedVariation
      ? parseFloat(selectedVariation?.discount_price)
      : parseFloat(productData?.product_detail?.discount_price);

    return isNaN(discount) ? 0 : discount * quantity;
  };

  const getRegularPrice = (): number => {
    const regular = isVariant && selectedVariation
      ? parseFloat(selectedVariation?.regular_price)
      : parseFloat(productData?.product_detail?.regular_price);

    return isNaN(regular) ? 0 : regular * quantity;
  };

  const colorAttribute = selectedVariation?.variation_attributes?.find(
    (attr) => attr.attribute?.name.toLowerCase() === "color"
  );

  const otherAttribute = selectedVariation?.variation_attributes?.find(
    (attr) => attr.attribute?.name.toLowerCase() !== "color"
  );

  const checkIsAddedToCart = (productId: number): boolean => {
    return cartItems.some((cartItem) => cartItem.id === productId);
  };

  const handleAddToCart = () => {
    if (checkIsAddedToCart(productData?.id)) {
      toast.error("Product already added to cart");
      return;
    }

    dispatch(
      addToCart({
        id: productData?.id,
        thumbnail: thumbnail,
        name: productData?.name,
        color: colorAttribute?.attribute_option?.attribute_value,
        size: otherAttribute?.attribute_option?.attribute_value,
        quantity,
        price: getPrice(),
        discountPrice: getRegularPrice(),
        shopName: productData?.merchant?.shop_name,
        shippingFee: productData?.variations[0]?.id_delivery_fee,
      })
    );

    toast.success("Product Added to Cart");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-x-10 w-full">
      {/* Product image section */}
      <div className="w-full lg:w-1/2">
        <ProductDisplay thumbnail={thumbnail} images={productData?.image} />
      </div>

      {/* Product info section */}
      <div className="w-full lg:w-1/2 space-y-3">
        <h2 className="text-base sm:text-lg lg:text-2xl font-medium text-neutral-900">
          {productData?.name}
        </h2>

        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-2 text-sm lg:text-lg">
            <span className="text-yellow-500">{productData?.rating_avg}</span>
            <span className="text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {productData?.rating_avg >= i + 1
                    ? "★"
                    : productData?.rating_avg >= i + 0.5
                      ? "☆"
                      : "☆"}
                </span>
              ))}
            </span>
            <div className="flex items-center gap-3">
              <span className="text-gray-500">{productData?.rating_count}</span>{" "}
              <span>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
          <div className="mt-2 lg:mt-0">
            <span className="flex items-center gap-x-6">
              <CiHeart className="h-6 w-6 cursor-pointer" />
              <PiShareNetworkLight className="h-6 w-6 cursor-pointer" />
            </span>
          </div>
        </div>

        <div className="text-[#00A788] text-lg sm:text-xl font-semibold">
          {formatBDT(getPrice())}
          {getRegularPrice() !== getPrice() && (
            <span className="line-through text-gray-400 text-sm sm:text-base ml-4 relative -top-1">
              {formatBDT(getRegularPrice())}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <h1 className="text-gray-800 text-sm sm:text-base">Promotion</h1>
          <div className="bg-orange-500 text-white text-xs px-2 py-1 inline-block rounded">
            Min. spend ৳550{" "}
            <IoIosArrowDown className="inline-block w-3 h-3 ml-1" />
          </div>
        </div>

        {colorAttribute && (
          <div className="text-sm sm:text-base text-gray-600">
            Available Color:{" "}
            <span className="font-medium text-gray-800">
              {colorAttribute.attribute_option?.attribute_value}
            </span>
          </div>
        )}

        {isVariant && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {productData?.variations?.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt="variation_img"
                className={`w-12 h-12 sm:w-14 sm:h-14 border cursor-pointer rounded ${selectedVariation?.id === item.id
                  ? "border-[#00A788] ring-1 ring-green-500"
                  : ""
                  }`}
                onClick={() => handleVariationClick(item)}
              />
            ))}
          </div>
        )}

        {otherAttribute && (
          <div className="text-sm sm:text-base text-gray-600 mt-2">
            Selected {otherAttribute.attribute?.name}:{" "}
            <span className="font-medium text-gray-800">
              {otherAttribute.attribute_option?.attribute_value}
            </span>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="text-sm sm:text-base mt-4 text-gray-800 font-semibold">
          Quantity
        </div>
        <div className="flex items-center justify-between gap-2 mt-1 border border-gray-200 rounded-full w-36 sm:w-40 p-1">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-8 h-8 border font-semibold text-center text-lg bg-[#F1F5F9] rounded-full text-gray-700"
          >
            -
          </button>
          <span className="w-8 text-center text-gray-700">
            {quantity.toString().padStart(2, "0")}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-8 h-8 font-semibold border text-center text-lg bg-[#F1F5F9] rounded-full text-gray-700"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          className="bg-[#00A788] text-white w-full sm:w-80 mt-4 py-2 rounded cursor-pointer hover:opacity-90"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductData;
