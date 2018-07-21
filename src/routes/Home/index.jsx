import React from "react";
import { Translate } from "react-localize-redux";
import { Link } from "react-router-dom";

const Home = () => (
  <Translate>
    {({ translate, activeLanguage }) => (
      <div className="flex w-full h-screen">
        <div className="m-auto text-center">
          <h1 className="my-10">{translate("welcome")}</h1>
          <Link
            to={`${activeLanguage.code}/cars`}
            className="no-underline bg-transparent hover:bg-red text-red font-semibold hover:text-white py-4 px-12 border-2 border-red hover:border-transparent rounded"
          >
            {translate("cars")}
          </Link>
        </div>
      </div>
    )}
  </Translate>
);
export default Home;
