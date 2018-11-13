import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import localization from "../../lang";
import { changeLanguage } from "../../actions";

class LanguageSwitch extends Component {
  renderFlags() {
    const { changeLanguage } = this.props;

    return Object.keys(localization).map(value => (
      <div
        className="language-item"
        onClick={() => changeLanguage(value)}
        key={value}
        style={{ backgroundImage: `url(/images/${value}-flag.png)` }}
      />
    ));
  }

  render() {
    return <div className="language-switch">{this.renderFlags()}</div>;
  }
}

LanguageSwitch.propTypes = {
  changeLanguage: PropTypes.func.isRequired
};

export default connect(
  null,
  { changeLanguage }
)(LanguageSwitch);
