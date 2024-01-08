import { CustomTable } from "@/app/components/CustomTable";
import orderHistory from "../../../assets/data/orders-history.json";

const OrderHistory = () => {
  const tableHeadItems = ["Order ID", "Price", "Delivery Address", "Status"];

  return (
    <CustomTable
      title={"Order History"}
      tableHeadItems={tableHeadItems}
      tableData={orderHistory}
    />
  );
};

export default OrderHistory;
