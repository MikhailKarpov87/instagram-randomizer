import React from "react";
import PropTypes from "prop-types";

const Spinner = props => {
  const { isActive } = props;
  return isActive && <i className="fab fa-instagram spinner" />;
};

Spinner.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default Spinner;
