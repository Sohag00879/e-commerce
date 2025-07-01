type TThumbnail = string;

type TImage = {
  url: string;
};

type ProductDisplayProps = {
  thumbnail: TThumbnail;
  images: { [key: string]: TImage };
};

const ProductDisplay = ({ thumbnail, images }: ProductDisplayProps) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Main Image */}
      <div className="w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] flex items-center justify-center py-3 rounded-md">
        <img
          src={thumbnail}
          alt="Shirt"
          className="object-contain w-full h-full"
        />
      </div>

      {/* Thumbnail List */}
      <div className="flex gap-2 mt-2 flex-wrap justify-center">

        <div className="w-24 sm:w-28 h-16 sm:h-20 rounded bg-[#4DE49] flex items-center justify-center">
          <img
            src={images?.["1"]?.url}
            alt="variation_img"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
