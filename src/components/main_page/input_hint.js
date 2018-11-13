import React from "react";
import PropTypes from "prop-types";

const InputHint = props => {
  const { label, hintContent } = props;
  return (
    <div className="input-hint small text-muted">
      <i className="far fa-question-circle" /> {label}
      <span className="tooltiptext">{hintContent}</span>
    </div>
  );
};

InputHint.propTypes = {
  label: PropTypes.string.isRequired,
  hintContent: PropTypes.object.isRequired
};

export default InputHint;
