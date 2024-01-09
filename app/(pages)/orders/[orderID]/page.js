import dishes from "@/assets/data/dishes.json";

const OrderDetails = () => {
  let totalPrice = 0;

  dishes.forEach((dish) => {
    totalPrice += dish.price;
  });

  return (
    <div>
      <div className="text-black p-6">
        <h1 className="text-xl font-semibold mb-10">Order</h1>
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
            <div className="flex justify-between mt-8">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-lg"> €{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
