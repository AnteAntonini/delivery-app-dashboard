import React from "react";

const NewMenuItem = () => {
  return (
    <div className="text-black px-8 py-6">
      <h1 className="mb-10 font-bold text-lg">New Menu Item</h1>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">
          {" "}
          <span className="text-red-500">* </span>Dish Name
        </h2>
        <input
          type="text"
          required
          className="border-gray border-2 px-2 min-w-[350px]"
          placeholder="Enter dish name "
        />
      </div>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">
          <span className="text-red-500">* </span>Dish Description
        </h2>
        <textarea
          required
          className="border-gray border-2 px-2 min-w-[350px]"
          placeholder="Enter dish description"
        ></textarea>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">
          <span className="text-red-500">* </span>Price (€)
        </h2>
        <input
          type="text"
          required
          className="border-gray border-2 px-2 w-[80px]"
        />
      </div>
      <button className="text-white bg-green-500 py-1 px-2 rounded-sm ">
        <input type="submit" className="cursor-pointer" />
      </button>
    </div>
  );
};

export default NewMenuItem;
