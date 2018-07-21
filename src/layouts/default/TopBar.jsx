import React from "react";
import { Translate } from "react-localize-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopBar = ({ route, lang }) => (
  <Translate>
    {({ translate }) => (
      <div className="w-full flex fixed bg-white shadow-md pl-5  sm:pr-2 md:pr-20 lg:pr-20 z-10 items-stretch">
        <a href="/" className="bg-transparent px-2 my-3 hidden md:block">
          <img
            src="/images/logo-text.png"
            alt="logo-symbol"
            className="block m-auto h-10"
          />
        </a>
        <a href="/" className="bg-transparent px-2 my-3 block md:hidden">
          <img
            src="/images/logo-symbol-red.png"
            alt="logo-symbol"
            className="block m-auto h-10"
          />
        </a>
        <div className="flex ml-auto items-stretch">
          <ul className="list-reset hidden lg:flex ml-auto mr-2 items-center py-4">
            <li>
              <a
                href="/"
                className="bg-transparent block no-underline text-lg text-black hover:text-red px-5"
              >
                {translate("home")}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="bg-transparent block no-underline text-lg text-black hover:text-red px-5"
              >
                {translate("about")}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="bg-transparent block no-underline text-lg text-black hover:text-red px-5"
              >
                {translate("faqs")}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="bg-transparent block no-underline text-lg text-black hover:text-red px-5"
              >
                {translate("contact-us")}
              </a>
            </li>
          </ul>
          <ul className="list-reset flex ml-auto mr-2 items-stretch">
            <li className="border-r border-l border-light-grey flex py-4 ">
              <a
                href="/"
                className="bg-transparent block no-underline text-lg text-grey hover:text-red px-5 my-auto"
              >
                <i className="fas fa-bullhorn" />
              </a>
            </li>
            <li className="border-r border-light-grey flex py-4">
              <a
                href="/"
                className="bg-transparent block no-underline text-lg text-grey hover:text-red px-5 my-auto"
              >
                <i className="fas fa-heart" />
              </a>
            </li>
            <li className="border-r border-light-grey flex py-4">
              <a
                href="/"
                className="bg-transparent block no-underline text-lg text-grey hover:text-red px-5 my-auto"
              >
                <i className="fas fa-shopping-bag" />
              </a>
            </li>
          </ul>

          <a
            href={`/${lang === "en" ? "ar" : "en"}${route.split(lang)[1]}`}
            className="bg-transparent block no-underline text-lg text-black hover:text-red px-5 flex justify-center items-center"
          >
            {lang === "en" ? "العربيه" : "English"}
          </a>

          <div className="text-lg text-grey flex justify-center items-center px-5">
            <p className="px-5 hidden md:block">Salama Ashoush</p>
            <img
              className="rounded-full w-10"
              src="https://avatars3.githubusercontent.com/u/13505298?s=400&u=af971a1036749181e83a3907fbe3dc3e5f71d688&v=4"
              alt="salama ashoush"
            />
          </div>
        </div>
      </div>
    )}
  </Translate>
);

TopBar.propTypes = {
  route: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired
};
export default TopBar;
