import PropTypes from "prop-types";
import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    if (window.Raven) {
      window.Raven.captureException(error, { extra: info });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex w-full h-screen">
          <h1 className="m-auto text-lg text-red">Something went wrong</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};
