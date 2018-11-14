import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import localization from "../../lang";
import { changeLanguage } from "../../actions";
import { actionChannel } from "redux-saga/Effects";

class LanguageSwitch extends Component {
  renderFlags() {
    console.log(this.props);
    // const { changeLanguage } = this.props;

    return Object.keys(localization).map(value => (
      <div
        className="language-item"
        onClick={() => this.props.changeLanguage(value)}
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

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: value => dispatch({ type: "HANDLE_CHANGE_LANGUAGE", payload: value })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LanguageSwitch);
