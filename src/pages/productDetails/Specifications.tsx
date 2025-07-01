import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
    variations?: Variation[];
    product_detail: ProductDetail;
    merchant: Merchant;
    brand?: {
        name: string;
    },
    sku?: string;
    barcode?: string;
    total_stock_qty?: number;
}

interface ProductDataProps {
    productData: ProductDataType;
}


const Specifications = ({ productData }: ProductDataProps) => {
    const [showAll, setShowAll] = useState(false);

    const specifications = [
        { label: "Product Name", value: productData?.name },
        { label: "Brand", value: productData?.brand?.name },
        { label: "SKU", value: productData?.sku },
        { label: "Barcode", value: productData?.barcode },
        { label: "Regular Price", value: `৳${productData?.product_detail?.regular_price}` },
        { label: "Discount Price", value: `৳${productData?.product_detail?.discount_price}` },
        { label: "Total Stock", value: productData?.total_stock_qty },
        { label: "Shop", value: productData?.merchant?.shop_name },
    ];

    const selectedVariation = productData?.variations?.[0];
    const variantSpecs = selectedVariation?.variation_attributes?.map(attr => ({
        label: attr?.attribute?.name,
        value: attr?.attribute_option?.attribute_value,
    })) || [];

    const allSpecs = [...specifications, ...variantSpecs];
    const visibleItems = showAll ? allSpecs : allSpecs.slice(0, 5);

    return (
        <div className="rounded-md shadow-sm text-gray-800 bg-white max-w-7xl mx-auto p-4">
            <h2 className="text-lg sm:text-xl font-semibold mb-6">Specification</h2>
            <p className="font-medium mb-3 text-lg text-gray-900">{productData?.name}</p>
            <ul className="list-disc pl-5 text-sm sm:text-base space-y-1 mb-3">
                {visibleItems.map((item, index) => (
                    <li key={index} className="text-gray-700">
                        <span className="font-medium">{item.label}:</span>{" "}
                        <span className="text-gray-600">{item.value || "N/A"}</span>
                    </li>
                ))}
            </ul>


            {allSpecs.length > 5 && (
                <div className="flex justify-center">
                    <button
                        className="flex items-center gap-1 text-sm text-black font-medium hover:underline"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "See Less" : "See More"}
                        {showAll ? <IoIosArrowUp size={16} /> : <IoIosArrowDown size={16} />}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Specifications;
