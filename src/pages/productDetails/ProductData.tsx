import { useState, useEffect } from "react";
import ProductDisplay from "../../components/ProductDetails/ProductDisplay";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { AppDispatch, RootState } from "../../redux/store";
import { addToCart } from "../../redux/features/addToCart/cartSlice";

const ProductData = ({ productData }) => {
  const isVariant = productData?.is_variant;

  // State
  const [quantity, setQuantity] = useState(1);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [thumbnail, setThumbnail] = useState(productData?.thumbnail);
  const cartItems = useAppSelector((state: RootState) => state.cart.cartItems);
   const dispatch = useAppDispatch<AppDispatch>()

  // On productData or isVariant change, set default variation and thumbnail
  useEffect(() => {
    if (isVariant && productData?.variations?.length > 0) {
      const firstVariation = productData.variations[0];
      setSelectedVariation(firstVariation);
      setThumbnail(firstVariation.image || productData.thumbnail);
    } else {
      setSelectedVariation(null);
      setThumbnail(productData?.thumbnail);
    }
    setQuantity(1);
  }, [productData, isVariant]);

  const handleVariationClick = (variation) => {
    setSelectedVariation(variation);
    setThumbnail(variation.image);
  };

  const formatBDT = (amount) =>
    isNaN(amount)
      ? "৳0.00"
      : amount.toLocaleString("en-BD", {
          style: "currency",
          currency: "BDT",
          minimumFractionDigits: 2,
        });

  const getPrice = () => {
    const discount =
      isVariant && selectedVariation
        ? parseFloat(selectedVariation?.discount_price)
        : parseFloat(productData?.product_detail?.discount_price);

    return isNaN(discount) ? 0 : discount * quantity;
  };

  const getRegularPrice = () => {
    const regular =
      isVariant && selectedVariation
        ? parseFloat(selectedVariation?.regular_price)
        : parseFloat(productData?.product_detail?.regular_price);

    return isNaN(regular) ? 0 : regular * quantity;
  };

  // Find attribute named 'color' (case insensitive)
  const colorAttribute = selectedVariation?.variation_attributes?.find(
    (attr) => attr.attribute?.name.toLowerCase() === "color"
  );

  // Find the first attribute that is NOT color
  const otherAttribute = selectedVariation?.variation_attributes?.find(
    (attr) => attr.attribute?.name.toLowerCase() !== "color"
  );



    const handleAddToCart = () => {
    dispatch(addToCart({
      selectedVariation
    }));
  };

  return (
    <div className="flex justify-between w-full">
      {/* Pass the dynamic thumbnail */}
      <ProductDisplay thumbnail={thumbnail} />
      <div className="flex-1 space-y-3">
        <h2 className="text-lg font-medium text-gray-800">{productData?.name}</h2>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-yellow-500">{productData?.rating_avg}</span>
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-gray-500">{productData?.rating_count}</span>
        </div>

        {/* Price */}
        <div className="text-green-600 text-xl font-semibold">
          {formatBDT(getPrice())}
          {getRegularPrice() !== getPrice() && (
            <span className="line-through text-gray-400 text-sm ml-2">
              {formatBDT(getRegularPrice())}
            </span>
          )}
        </div>

        {/* Tag */}
        <div className="bg-orange-500 text-white text-xs px-2 py-1 inline-block rounded">
          Min. spend ৳550
        </div>

        {/* Available Color */}
        {colorAttribute && (
          <div className="text-sm text-gray-600">
            Available Color:{" "}
            <span className="font-medium text-gray-800">
              {colorAttribute.attribute_option?.attribute_value}
            </span>
          </div>
        )}

        {/* Variation Images */}
        {isVariant && (
          <div className="flex gap-2 mt-2">
            {productData?.variations?.map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt="variation_img"
                className={`w-10 h-12 border cursor-pointer rounded ${
                  selectedVariation?.id === item.id
                    ? "border-green-600 ring-2 ring-green-500"
                    : ""
                }`}
                onClick={() => handleVariationClick(item)}
              />
            ))}
          </div>
        )}

        {/* Selected other attribute (like size, ram, etc) */}
        {otherAttribute && (
          <div className="text-sm text-gray-600 mt-2">
            Selected {otherAttribute.attribute?.name}:{" "}
            <span className="font-medium text-gray-800">
              {otherAttribute.attribute_option?.attribute_value}
            </span>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="text-sm mt-4 text-gray-800">Quantity</div>
        <div className="flex items-center gap-2 mt-1">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-6 h-6 border text-center text-sm"
          >
            -
          </button>
          <span className="w-8 text-center">{quantity.toString().padStart(2, "0")}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-6 h-6 border text-center text-sm"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button className="bg-green-600 text-white w-full mt-4 py-2 rounded"onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductData;
