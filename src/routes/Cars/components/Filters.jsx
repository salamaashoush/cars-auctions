import React from "react";
import { Translate } from "react-localize-redux";

const Filters = () => (
  <Translate>
    {({ translate }) => (
      <div className="w-full">
        <div className="flex justify-between border-b-2 py-5 px-5 border-grey ">
          <p className="text-lg font-semibold">{translate("filters")}</p>
          <button type="button" className="text-red">
            {translate("reset")}
          </button>
        </div>
        <div className="flex flex-col justify-between py-3 px-5">
          <p className="text-lg text-grey font-semibold py-3">
            {translate("condition")}
          </p>
          <ul className="list-reset flex flex-col justify-between font-semibold">
            <li className="py-2 flex justify-between">
              <span>{translate("new")}</span>
              <input type="checkbox" />
            </li>
            <li className="py-2 flex justify-between">
              <span>{translate("used")}</span>
              <input type="checkbox" />
            </li>
            <li className="py-2 flex justify-between">
              <span>{translate("scrap")}</span>
              <input type="checkbox" />
            </li>
          </ul>
        </div>
        <div className="flex justify-start items-center border border-grey py-2 mx-3 my-5">
          <span className="text-grey font-semibold px-3">
            {translate("make")}:
          </span>
          <div className="relative flex-1 flex">
            <select className="block appearance-none bg-grey-lighter border border-grey-lighter text-black font-semibold rounded leading-tight flex-1">
              <option>Salama</option>
              <option>Salama</option>
              <option>Salama</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center border border-grey py-2 mx-3 my-5">
          <span className="text-grey font-semibold px-3">
            {translate("model")}:
          </span>
          <div className="relative flex-1 flex">
            <select className="block appearance-none bg-grey-lighter border border-grey-lighter text-black font-semibold rounded leading-tight flex-1">
              <option>Salama</option>
              <option>Salama</option>
              <option>Salama</option>
            </select>
            <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )}
  </Translate>
);

export default Filters;
