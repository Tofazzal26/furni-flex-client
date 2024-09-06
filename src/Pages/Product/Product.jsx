import axios from "axios";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";

const Product = () => {
  const [category, setCategory] = useState("");
  const [rocking, setRocking] = useState(true);
  const [side, setSide] = useState(true);
  const [lounge, setLounge] = useState(true);

  const { refetch, data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:4000/allProduct", {
        withCredentials: true,
      });
      return res.data;
    },
  });

  console.log(product);

  const handleButtonSelect = () => {
    setRocking(true);
    setSide(true);
    setLounge(true);
    setCategory("rocking_chair");
  };
  const handleButtonSelect2 = () => {
    setSide(false);
    setLounge(true);
    setRocking(false);
    setCategory("side_chair");
  };
  const handleButtonSelect3 = () => {
    setLounge(false);
    setSide(true);
    setRocking(false);
    setCategory("lounge_chair");
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 my-10">
          <div className="col-span-1 ">
            <div className="bg-gray-200 rounded-md md:min-h-screen">
              <div className="flex flex-col space-y-2 py-6">
                <button
                  onClick={handleButtonSelect}
                  className={`text-[17px] text-left py-2 px-4 rounded-md mx-auto w-[200px]   font-semibold ${
                    rocking === true && "bg-black text-white"
                  }`}
                >
                  Rocking chair
                </button>
                <button
                  onClick={handleButtonSelect2}
                  className={`text-[17px] text-left py-2 px-4 rounded-md mx-auto w-[200px]   font-semibold ${
                    side === false && "bg-black text-white"
                  }`}
                >
                  Side chair
                </button>
                <button
                  onClick={handleButtonSelect3}
                  className={`text-[17px] text-left py-2 px-4 rounded-md mx-auto w-[200px]   font-semibold ${
                    lounge === false && "bg-black text-white"
                  }`}
                >
                  Lounge chair
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            <div className="grid grid-cols-1 gap-4 md:gap-10 md:grid-cols-3">
              {product.map((item) => (
                <ProductCard key={item._id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
