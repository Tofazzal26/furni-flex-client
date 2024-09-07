import { MdOutlineEuroSymbol } from "react-icons/md";
const CartDashboard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
        <div className="col-span-4">
          <h2 className="text-2xl font-semibold my-8">
            An overview of your order
          </h2>
          <div className="bg-gray-200 rounded-md">
            <div className="py-6 px-6">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <span className="border-2 border-gray-300 h-[40px] w-[100px] py-2 rounded-md flex items-center gap-4 font-semibold text-xl px-4">
                    <button>-</button>1<button>+</button>
                  </span>
                  <div className="flex gap-4">
                    <img
                      src="https://i.ibb.co/WvJTvGL/39-2-450x572.jpg"
                      alt=""
                      className="w-[80px] h-[80px]"
                    />
                    <h2 className="font-semibold">Recliner Chair Steel</h2>
                  </div>
                </div>
                <div>
                  <button className="font-semibold">X</button>
                </div>
              </div>
              <h2 className="flex justify-between">
                <span></span>
                <span className="flex items-center text-[17px] font-semibold">
                  <MdOutlineEuroSymbol />
                  299.00
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl font-semibold my-8">Order details</h2>
          <div className="bg-gray-200 rounded-md">
            <div className="p-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold text-gray-500">Subtotal</h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-500 flex items-center">
                      <MdOutlineEuroSymbol />
                      1071.00
                    </h2>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-semibold text-gray-500">Shipping</h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-500 flex items-center">
                      Free
                    </h2>
                  </div>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <div>
                    <h2 className="font-semibold text-gray-500">
                      Estimated Tax
                    </h2>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-500">
                      <MdOutlineEuroSymbol />
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center border-t-2 border-gray-300 pt-4">
                <div>
                  <h2 className="font-semibold text-gray-500 text-xl">Total</h2>
                </div>
                <div>
                  <h2 className="font-semibold text-xl flex items-center">
                    <MdOutlineEuroSymbol />
                    1071.00
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-black w-full text-white font-semibold py-3 mt-4 rounded-md">
              GO TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDashboard;
