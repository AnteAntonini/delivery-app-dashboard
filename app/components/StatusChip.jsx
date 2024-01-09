const StatusChip = ({ currentStatus, title }) => {
  const getStatusClasses = () => {
    switch (currentStatus) {
      case "Accepted":
      case "Delivered":
        return "text-green-600 border-green-500 bg-green-100";
      case "Pending":
        return "text-yellow-600 border-yellow-500 bg-yellow-100";
      case "Declined":
        return "text-red-600 border-red-500 bg-red-100";
      default:
        return "";
    }
  };

  return (
    <div
      className={`inline-block
       border-2 p-1 ${getStatusClasses()} min-w-[85px] text-center`}
    >
      {title}
    </div>
  );
};

export default StatusChip;
