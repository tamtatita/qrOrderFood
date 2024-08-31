import React from "react";

const MenuItem = (props) => {
  const { id, name, image } = props;
  return (
    <div className="w-[48%] relative bg-orange-400 h-[40vh]">
      {name}
      <img src={image} alt="food" />
    </div>
  );
};

export default MenuItem;
