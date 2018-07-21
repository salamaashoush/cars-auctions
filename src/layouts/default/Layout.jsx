import React from "react";
import PropTypes from "prop-types";
import SideNavs from "./SideNav";
import TopBar from "./TopBar";

const PageLayout = ({ children, lang }) => {
  const rtl = lang === "ar";
  document.body.setAttribute("dir", rtl ? "rtl" : "ltr");
  document.body.style.direction = rtl ? "rtl" : "ltr";
  return (
    <div dir={rtl ? "rtl" : "ltr"} className="flex flex-wrap">
      <SideNavs
        navs={[
          { text: "S", icon: "asdas", href: "asdas" },
          { text: "S", icon: "asdas", href: "das" },
          { text: "S", icon: "asdas", href: "addd" },
          { text: "S", icon: "asdas", href: "assdda" },
          { text: "S", icon: "asdas", href: "adww" }
        ]}
      />
      <div className="w-full md:flex-1 md:ml-16 flex flex-col">
        <TopBar
          navs={[
            { text: "S", icon: "asdas", href: "asdas" },
            { text: "S", icon: "asdas", href: "das" },
            { text: "S", icon: "asdas", href: "addd" },
            { text: "S", icon: "asdas", href: "assdda" },
            { text: "S", icon: "asdas", href: "adww" }
          ]}
        />
        <div className="flex flex-col lg:flex-row mt-16">{children}</div>
      </div>
    </div>
  );
};

PageLayout.propTypes = {
  lang: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PageLayout;
