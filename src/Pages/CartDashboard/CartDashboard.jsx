import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { MdOutlineEuroSymbol } from "react-icons/md";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import DashboardCard from "./DashboardCard";
import Swal from "sweetalert2";
const CartDashboard = () => {
  const { user, cartRefetch, handleUpdateQuantity } = useContext(AuthContext);

  const { refetch, data: myCartProduct = [] } = useQuery({
    queryKey: ["myCartProduct", !user?.email],
    queryFn: async () => {
      const resp = await axios.get(
        `http://localhost:4000/singleUser/${user?.email}`
      );
      return resp.data;
    },
  });

  const TotalPrice = myCartProduct.reduce(
    (AfterValue, currentValue) => AfterValue + parseInt(currentValue.disPrice),
    0
  );

  const handleDeleteProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const resp = await axios.delete(
          `http://localhost:4000/productCartDelete/${id}`,
          { withCredentials: true }
        );
        refetch();
        cartRefetch();

        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 mb-6">
        <div className="col-span-4">
          <h2 className="text-2xl font-semibold my-8">
            An overview of your order
          </h2>
          <div className="space-y-2">
            {myCartProduct.map((item) => (
              <DashboardCard
                key={item._id}
                item={item}
                handleDeleteProduct={handleDeleteProduct}
                handleUpdateQuantity={handleUpdateQuantity}
                refetch={refetch}
              />
            ))}
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
                      {TotalPrice}.00
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
                    {TotalPrice}.00
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
