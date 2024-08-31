import React from "react";

const CategoryItem = ({ data, action, onChange }) => {
  return (
    <button
      onClick={() => onChange(data?.name)}
      className={`${
        action === data?.name ? "bg-orange-400 text-white" : "bg-gray-100"
      } px-5 py-2 rounded-full shadow-md shadow-gray-300 capitalize text-sm font-semibold`}
    >
      {data.name}
    </button>
  );
};

export default CategoryItem;
