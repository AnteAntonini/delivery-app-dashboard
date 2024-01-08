import orders from "../../../assets/data/orders.json";
import { CustomTable } from "@/app/components/CustomTable";

const Orders = () => {
  const tableHeadItems = ["OrderID", "Delivery Address", "Price", "Status"];

  return (
    <CustomTable
      title={"Orders"}
      tableHeadItems={tableHeadItems}
      tableData={orders}
      tableKey={"orderID"}
    />
  );
};

export default Orders;
