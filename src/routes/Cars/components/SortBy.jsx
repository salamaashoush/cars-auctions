import React from "react";
import PropTypes from "prop-types";
import { Translate } from "react-localize-redux";

const SortBy = ({ value, onChange }) => (
  <Translate>
    {({ translate }) => (
      <div className="md:flex justify-between items-center py-2 px-5 hidden">
        <button
          onClick={() =>
            onChange({
              by: "AuctionInfo.endDate",
              assc: value.by === "AuctionInfo.endDate" ? !value.assc : true
            })
          }
          type="button"
          className={`text-md ${
            value.by === "AuctionInfo.endDate" ? "text-black" : "text-grey"
          } hover:text-black px-5`}
        >
          {value.by === "AuctionInfo.endDate" && !value.assc ? (
            <i className="fas fa-sort-amount-down px-1" />
          ) : (
            <i className="fas fa-sort-amount-up px-1" />
          )}
          {translate("by-endtime")}
        </button>
        <button
          onClick={() =>
            onChange({
              by: "AuctionInfo.bids",
              assc: value.by === "AuctionInfo.bids" ? !value.assc : true
            })
          }
          type="button"
          className={`text-md ${
            value.by === "AuctionInfo.bids" ? "text-black" : "text-grey"
          } hover:text-black px-5`}
        >
          {value.by === "AuctionInfo.bids" && !value.assc ? (
            <i className="fas fa-sort-amount-down px-1" />
          ) : (
            <i className="fas fa-sort-amount-up px-1" />
          )}
          {translate("by-bids")}
        </button>
        <button
          onClick={() =>
            onChange({
              by: "year",
              assc: value.by === "year" ? !value.assc : true
            })
          }
          type="button"
          className={`text-md ${
            value.by === "year" ? "text-black" : "text-grey"
          } hover:text-black px-5`}
        >
          {value.by === "year" && !value.assc ? (
            <i className="fas fa-sort-amount-down px-1" />
          ) : (
            <i className="fas fa-sort-amount-up px-1" />
          )}
          {translate("by-year")}
        </button>
        <button
          onClick={() =>
            onChange({
              by: "AuctionInfo.currentPrice",
              assc: value.by === "AuctionInfo.currentPrice" ? !value.assc : true
            })
          }
          type="button"
          className={`text-md ${
            value.by === "AuctionInfo.currentPrice" ? "text-black" : "text-grey"
          } hover:text-black px-5`}
        >
          {value.by === "AuctionInfo.currentPrice" && !value.assc ? (
            <i className="fas fa-sort-amount-down px-1" />
          ) : (
            <i className="fas fa-sort-amount-up px-1" />
          )}
          {translate("by-price")}
        </button>
      </div>
    )}
  </Translate>
);
SortBy.propTypes = {
  value: PropTypes.shape({
    assc: PropTypes.bool,
    by: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func.isRequired
};
export default SortBy;
