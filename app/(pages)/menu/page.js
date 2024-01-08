import { CustomTable } from "@/app/components/CustomTable";
import menu from "../../../assets/data/menu.json";

const Menu = () => {
  const tableHeadItems = ["Menu Item", "Price", "Action"];

  return (
    <CustomTable
      title={"Menu"}
      tableHeadItems={tableHeadItems}
      tableData={menu}
      action
      menuTable
    />
  );
};

export default Menu;
