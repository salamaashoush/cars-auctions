import React from "react";
import PropTypes from "prop-types";
import { Translate } from "react-localize-redux";

const SortBy = ({ value, onChange }) => (
  <Translate>
    {({ translate }) => (
      <div className="md:flex justify-between items-center py-2 px-5 hidden">
        <button
          onClick={() => onChange("AuctionInfo.endDate")}
          type="button"
          className={`text-md ${
            value === "AuctionInfo.endDate" ? "text-black" : "text-grey"
          } hover:text-black px-5`}
        >
          {translate("by-endtime")}
        </button>
        <button
          onClick={() => onChange("AuctionInfo.bids")}
          type="button"
          className={`text-md ${
            value === "AuctionInfo.bids" ? "text-black" : "text-grey"
          } hover:text-black px-5`}
        >
          {translate("by-bids")}
        </button>
        <button
          onClick={() => onChange("year")}
          type="button"
          className={`text-md ${
            value === "year" ? "text-black" : "text-grey"
          } hover:text-black px-5`}
        >
          {translate("by-year")}
        </button>
        <button
          onClick={() => onChange("AuctionInfo.currentPrice")}
          type="button"
          className={`text-md ${
            value === "AuctionInfo.currentPrice" ? "text-black" : "text-grey"
          } hover:text-black px-5`}
        >
          {translate("by-price")}
        </button>
      </div>
    )}
  </Translate>
);
SortBy.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default SortBy;
