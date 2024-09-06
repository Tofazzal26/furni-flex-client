import React from "react";

const ProductCard = () => {
  return (
    <div className="w-[330px] p-6 rounded-md border-[1px]">
      <img
        src="https://source.unsplash.com/random/300x300/?1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <h2 className="text-[20px] font-bold tracking-wide">
          Recliner Chair Wood
        </h2>
        <h2 className="text-[20px] font-bold tracking-wide">
          <span>E298.00</span> <span className="text-gray-400">E350.00</span>{" "}
          <span className="text-red-500">30% OFF</span>
        </h2>
      </div>
      <p className="text-gray-400 text-lg">
        It has a backrest that can be lited back, and often a footrest extended
      </p>
      <button className="bg-black text-white font-semibold text-lg w-full rounded-md py-2 mt-4">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
