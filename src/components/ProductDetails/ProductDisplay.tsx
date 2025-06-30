const ProductDisplay = ({thumbnail}) => {

  return (
    <div className="flex flex-col items-center">
        <div className="w-[300px] h-[300px] bg-gray-100 flex items-center justify-center">
          <img src={thumbnail}alt="Shirt" className="object-contain w-full h-full" />
        </div>
        <div className="flex gap-2 mt-2">
            <img src={''} alt="thumb" className="w-12 h-16 object-cover border" />
        </div>
        {/* <div className="flex gap-2 mt-2">
          {Array(5).fill(0).map((_, i) => (
            <img key={i} src="/shirt.png" alt="thumb" className="w-12 h-16 object-cover border" />
          ))}
        </div> */}
      </div>
  );
};

export default ProductDisplay;