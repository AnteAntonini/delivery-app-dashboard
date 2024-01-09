import dishes from "@/assets/data/dishes.json";

const OrderDetails = ({ params }) => {
  console.log("params", params);

  let totalPrice = 0;

  dishes.forEach((dish) => {
    totalPrice += dish.price;
  });

  return (
    <div className="text-black p-6">
      <h1 className="text-xl font-semibold mb-10">Order {params.orderID}</h1>
      <div className="px-6 mb-10">
        <div className="flex  border-b-1 border-gray py-3 border-t-[1px] border-gray">
          <span className="flex-1">Customer</span>
          <span className="flex-1">Ante Nini</span>
        </div>
        <div className="flex border-y-[1px] border-gray py-3">
          <span className="flex-1">Customer Address</span>
          <span className="flex-1">Test Address 1234</span>
        </div>
      </div>
      <div>
        {dishes.map((dish) => (
          <div className="flex justify-between border-b-[1px] border-gray py-2">
            <span className="font-bold">
              {dish.name} x{dish.quantity}
            </span>
            <span className="font-semibold">€ {dish.price}</span>
          </div>
        ))}
        <div>
          <div className="flex justify-between my-10">
            <span className="font-bold text-xl">Total:</span>
            <span className="font-bold text-xl"> €{totalPrice}</span>
          </div>
        </div>
        <div className="flex justify-around mb-16">
          <button className="text-white bg-red-500 py-2 rounded-sm cursor-pointer flex-1 mr-10">
            Decline Order
          </button>
          <button className="text-white bg-green-500 py-2  rounded-sm cursor-pointer flex-1">
            Accept Order
          </button>
        </div>
        <div className="flex ">
          <button className="text-white bg-green-500 py-2  rounded-sm cursor-pointer flex-1">
            Food is Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
