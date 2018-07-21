import React from "react";
import PropTypes from "prop-types";

const ViewToggle = ({ value, onChange }) => (
  <div className="flex justify-between items-center py-2 px-2">
    <button
      onClick={() => onChange("list")}
      type="button"
      className={`text-md ${
        value === "list" ? "text-black" : "text-grey"
      } hover:text-black px-2`}
    >
      <i className="fas fa-th-list" />
    </button>
    <button
      onClick={() => onChange("grid")}
      type="button"
      className={`text-md ${
        value === "grid" ? "text-black" : "text-grey"
      } hover:text-black px-2`}
    >
      <i className="fas fa-th" />
    </button>
  </div>
);
ViewToggle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default ViewToggle;
