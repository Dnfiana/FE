import React from "react";

const CardOns = () => {
  return (
    <>
      <div className="p-3 rounded h-auto mt-3 cn-trav">
        <h6 className="px-2 cn-trav-item">Add Ons</h6>
        <div className="d-flex justify-content-between">
          <h6>Jakarta (CGK) - Bali Denpasar (DPS)</h6>
          <span>JN280</span>
        </div>
        <div>
          <h6>Adult 1</h6>
          <select className="form-select w-25 my-2">
            <option selected>20Kg - Free</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CardOns;
