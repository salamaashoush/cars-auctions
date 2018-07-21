import React from "react";
import PropTypes from "prop-types";
import { addSeconds } from "date-fns/esm";
import Countdown from "react-cntdwn";

class CarCard extends React.Component {
  state = {
    lastFive: false
  };

  handleCountDown = () => {
    this.setState({
      lastFive: true
    });
  };

  render() {
    const { image, name, price, currency, lot, bids, endDate } = this.props;
    const { lastFive } = this.state;
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
        <div
          className="w-full rounded relative shadow-md bg-white"
          style={{ minHeight: 400 }}
        >
          <div
            className="w-full bg-center bg-no-repeat bg-cover"
            style={{ height: 250, backgroundImage: `url("${image}")` }}
            title={name}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <div className="text-xl mb-2 text-green-light">
              <span className="font-bold">{price}</span>
              <sup className="px-2 text-green-lighter ">{currency}</sup>
            </div>
          </div>
          <ul className="list-reset flex justify-between items-center absolute rounded pin-x pin-b w-full py-3 border-t border-grey-light px-5 text-grey-darker font-semibold">
            <li>
              <i className="fas fa-box" />
              <span className="px-2">{lot}</span>
            </li>
            <li>
              <i className="fas fa-bullhorn" />
              <span className="px-2">{bids}</span>
            </li>
            <li
              className={`flex justify-start items-center ${
                lastFive ? "text-red" : ""
              }`}
            >
              <i className="fas fa-stopwatch px-2" />
              <div className={`${lastFive ? "hidden" : ""}`}>
                <Countdown
                  targetDate={addSeconds(new Date(), endDate - 300)}
                  format={{
                    hour: "hh",
                    minute: "mm",
                    second: "ss"
                  }}
                  interval={1000}
                  timeSeparator=":"
                  leadingZero
                  onFinished={this.handleCountDown}
                />
              </div>
              <div className={`${lastFive ? "" : "hidden"}`}>
                <Countdown
                  targetDate={addSeconds(new Date(), 300)}
                  format={{
                    hour: "hh",
                    minute: "mm",
                    second: "ss"
                  }}
                  interval={1000}
                  timeSeparator=":"
                  leadingZero
                  onFinished={this.handleCountDown}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

CarCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  bids: PropTypes.number.isRequired,
  lot: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired
};
export default CarCard;
