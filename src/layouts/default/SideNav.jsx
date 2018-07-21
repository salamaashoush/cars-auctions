import React from "react";

const SideBar = () => (
  <div className="hidden md:w-auto md:block h-screen fixed bg-red z-20">
    <ul className="list-reset flex flex-col justify-start">
      <li>
        <a href="/" className="bg-transparent px-2 py-6">
          <img
            src="/images/logo-symbol.png"
            alt="logo-symbol"
            className="block m-auto h-8"
          />
        </a>
      </li>
      <li>
        <a
          href="/"
          className="bg-white block no-underline text-lg text-red px-8 py-6"
        >
          <i className="fas fa-shopping-bag" />
        </a>
      </li>
      <li>
        <a
          href="/"
          className="bg-transparent hover:bg-white block no-underline text-lg text-white hover:text-red px-8 py-6"
        >
          <i className="fas fa-shopping-bag" />
        </a>
      </li>
      <li>
        <a
          href="/"
          className="bg-transparent hover:bg-white block no-underline text-lg text-white hover:text-red px-8 py-6"
        >
          <i className="fas fa-shopping-bag" />
        </a>
      </li>
      <li>
        <a
          href="/"
          className="bg-transparent hover:bg-white block no-underline text-lg text-white hover:text-red px-8 py-6"
        >
          <i className="fas fa-shopping-bag" />
        </a>
      </li>
      <li>
        <a
          href="/"
          className="bg-transparent hover:bg-white block no-underline text-lg text-white hover:text-red px-8 py-6"
        >
          <i className="fas fa-shopping-bag" />
        </a>
      </li>
      <li>
        <a
          href="/"
          className="bg-transparent hover:bg-white block no-underline text-lg text-white hover:text-red px-8 py-6"
        >
          <i className="fas fa-shopping-bag" />
        </a>
      </li>
    </ul>
  </div>
);
export default SideBar;
