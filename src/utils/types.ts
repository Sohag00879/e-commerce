export interface SubChild {
  id: number;
  name: string;
  slug: string;
  image: string;
}

export interface SubCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  subchilds: SubChild[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  subcategories: SubCategory[];
}

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
  };
  sku?: string;
  barcode?: string;
  total_stock_qty?: number;
}

export interface ProductDataProps {
  productData: ProductDataType;
}
