import React from "react";

const Filter = ({ value, filterHandler }) => {
  return (
    <div>
      <label id="filter">filter shown with</label>{" "}
      <input
        id="filter"
        placeholder="Name"
        value={value}
        onChange={filterHandler}
      />
    </div>
  );
};

export default Filter;
