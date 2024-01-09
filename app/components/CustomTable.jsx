import React from "react";
import StatusChip from "./StatusChip";
import Link from "next/link";

export const CustomTable = ({
  title,
  tableHeadItems,
  tableData,
  tableKey,
  action,
  menuTable,
}) => {
  return (
    <div className="p-6 h-full">
      <div className="flex justify-between">
        <h1 className="text-black font-bold text-lg">{title}</h1>
        {menuTable && (
          <Link
            href={"/menu/create"}
            className="text-white bg-green-500 py-1 px-2 rounded-sm cursor-pointer"
          >
            New item
          </Link>
        )}
      </div>
      <div className="p-6 mt-4">
        <table className="text-black w-full">
          <thead>
            <tr>
              {tableHeadItems.map((tableHeadItem) => (
                <th className="text-start font-semibold" key={tableHeadItem}>
                  {tableHeadItem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                className="border-gray border-y-[1px]"
                key={tableData[tableKey] || index}
              >
                {Object.keys(data).map((key, index) => (
                  <React.Fragment key={index}>
                    {key === "orderID" ? (
                      <td className="text-blue-500 font-semibold">
                        <Link href={`orders/${data[key]}`}>{data[key]}</Link>
                      </td>
                    ) : (
                      <td className="py-4">
                        {key === "status" ? (
                          <StatusChip
                            currentStatus={data[key]}
                            title={data[key]}
                          />
                        ) : (
                          <>{key === "price" ? `${data[key]} €` : data[key]}</>
                        )}
                      </td>
                    )}
                  </React.Fragment>
                ))}
                <td>
                  {action && (
                    <div className="border-red-200 text-red-500 border-2 px-2 py-1 inline-block cursor-pointer">
                      Remove
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-black flex justify-end">
          <span className="border-black border-[1px] px-2 mt-4 cursor-pointer">
            {"<"}
          </span>
          <span className="border-black border-[1px] px-2 mt-4 cursor-pointer mx-2">
            1
          </span>
          <span className="border-black border-[1px] px-2 mt-4 cursor-pointer">
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
};
