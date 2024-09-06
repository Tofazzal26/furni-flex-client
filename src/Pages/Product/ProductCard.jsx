import { MdOutlineEuroSymbol } from "react-icons/md";

const ProductCard = ({ item }) => {
  const { category, description, disPrice, image, off, price, title } =
    item || {};

  return (
    <div className="p-6 rounded-md border-[1px]">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h2 className="text-[20px] font-bold tracking-wide">{title}</h2>
        <h2 className="text-[20px] flex items-center gap-4 my-2  font-bold tracking-wide">
          <span className="flex items-center">
            <MdOutlineEuroSymbol />
            {disPrice}.00
          </span>{" "}
          <span className="text-gray-400 flex items-center">
            <MdOutlineEuroSymbol />
            <del>{price}.00</del>
          </span>{" "}
          <span className="text-red-500">{off}% OFF</span>
        </h2>
      </div>
      <p className="text-gray-400 text-lg">{description}</p>
      <button className="bg-black text-white font-semibold text-lg w-full rounded-md py-2 mt-4">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
