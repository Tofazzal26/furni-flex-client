import { MdOutlineEuroSymbol } from "react-icons/md";

const DashboardCard = ({
  item,
  handleDeleteProduct,
  handleUpdateQuantity,
  refetch,
}) => {
  const {
    category,
    description,
    disPrice,
    image,
    price,
    title,
    _id,
    quantity,
  } = item || {};

  const handlePlus = () => {
    handleUpdateQuantity(_id, parseInt(quantity) + 1);
    refetch();
  };
  const handleMinus = () => {
    if (quantity > 0) {
      handleUpdateQuantity(_id, parseInt(quantity) - 1);
      refetch();
    }
  };

  return (
    <div className="bg-gray-200 rounded-md">
      <div className="py-6 px-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="border-2 border-gray-300 h-[40px] w-[100px] py-2 rounded-md flex items-center gap-4 font-semibold text-xl px-4">
              <button onClick={handleMinus}>-</button>
              {quantity}
              <button onClick={handlePlus}>+</button>
            </span>
            <div className="flex gap-4">
              <img src={image} alt="" className="w-[80px] h-[80px]" />
              <h2 className="font-semibold">{title}</h2>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleDeleteProduct(_id)}
              className="font-semibold"
            >
              X
            </button>
          </div>
        </div>
        <h2 className="flex justify-between">
          <span></span>
          <span className="flex items-center text-[17px] font-semibold">
            <MdOutlineEuroSymbol />
            {disPrice}.00
          </span>
        </h2>
      </div>
    </div>
  );
};

export default DashboardCard;
