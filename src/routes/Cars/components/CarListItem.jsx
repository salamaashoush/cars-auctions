import React from "react";
import PropTypes from "prop-types";
import { addSeconds } from "date-fns/esm";
import Countdown from "react-cntdwn";

class CardLIstItem extends React.Component {
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
      <div className="w-full flex px-2 mb-4">
        <div
          className="w-1/4 h-auto bg-center bg-cover bg-no-repeat rounded-t text-center overflow-hidden"
          style={{ background: `url("${image}")` }}
          title={name}
        />
        <div className="flex-1 border border-grey-light bg-white rounded-bflex flex-col justify-between leading-normal">
          <div className="text-black font-bold text-xl my-2 px-4">{name}</div>
          <div className="text-xl mb-2 text-green-light px-4">
            <span className="font-bold">{price}</span>
            <sup className="px-2 text-green-lighter">{currency}</sup>
          </div>
          <ul className="list-reset flex justify-between items-center rounded pin-x pin-b w-full py-3 border-t border-grey-light px-4 text-grey-darker font-semibold flex-1">
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

CardLIstItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  bids: PropTypes.number.isRequired,
  lot: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired
};
export default CardLIstItem;
