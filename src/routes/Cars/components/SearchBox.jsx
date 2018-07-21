import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange, placeholder }) => (
  <div className="flex items-center py-2 flex-1">
    <i className="fas fa-search text-grey" />
    <input
      value={value}
      onChange={onChange}
      className="appearance-none bg-transparent border-none w-full text-grey mr-3 py-1 px-2 leading-tight"
      type="text"
      placeholder={placeholder}
      aria-label={placeholder}
    />
  </div>
);
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};
export default SearchBox;
