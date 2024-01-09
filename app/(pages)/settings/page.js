const Settings = () => {
  return (
    <div className="text-black px-8 py-8 flex flex-col">
      <h1 className="mb-10 font-bold text-lg">Restaurant Details</h1>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">
          <span className="text-red-500">* </span>Restaurant Name
        </h2>
        <input
          type="text"
          required
          className="border-gray border-2 py-1 px-2 w-[300px]"
          placeholder="Enter restaurant name here"
        />
      </div>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">
          <span className="text-red-500">* </span>Restaurant Address
        </h2>
        <input
          type="text"
          required
          className="border-gray border-2 py-1 px-2 w-[300px]"
          placeholder="Enter restaurant address here"
        />
      </div>
      <button className="text-white bg-green-500 py-2 px-2 rounded-sm w-[100px]">
        <input type="submit" className="cursor-pointer" />
      </button>
    </div>
  );
};

export default Settings;
