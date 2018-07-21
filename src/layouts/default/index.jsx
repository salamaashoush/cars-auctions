import React from "react";
import PropTypes from "prop-types";
import { withLocalize } from "react-localize-redux";
import { renderToStaticMarkup } from "react-dom/server";
import Preloader from "Shared/Preloader";
import PageLayout from "./Layout";
import globalTranslations from "../../_locales/all.json";

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        { name: "English", code: "en" },
        { name: "Arabic", code: "ar" }
      ],
      translation: globalTranslations,
      options: {
        renderToStaticMarkup,
        defaultLanguage: props.lang
      }
    });
  }

  render() {
    const { children, activeLanguage, lang } = this.props;
    return activeLanguage ? (
      <PageLayout lang={lang}>{children}</PageLayout>
    ) : (
      <Preloader />
    );
  }
}

DefaultLayout.propTypes = {
  lang: PropTypes.string.isRequired,
  activeLanguage: PropTypes.object,
  initialize: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

DefaultLayout.defaultProps = {
  activeLanguage: null
};

export default withLocalize(DefaultLayout);
