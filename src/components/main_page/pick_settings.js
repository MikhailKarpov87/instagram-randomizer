import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Spinner from "../spinner";
import localization from "../../lang";
import { updateWinnersNum, validateWinnersNum, startPicking } from "../../actions";
import { calculateRemovingSpeed } from "../../helpers";

class PickSettings extends Component {
  render() {
    const {
      input,
      profiles,
      loading,
      picking,
      error,
      settings,
      updateWinnersNum,
      validateWinnersNum,
      startPicking
    } = this.props;

    //  Calculating remove animation speed based on number of profiles
    const removeSpeed = calculateRemovingSpeed(profiles.length);

    const lang = localization[settings.lang];

    return (
      <div className="container">
        <div className="row">
          {error && (
            <div className="alert alert-danger" role="alert">
              {lang[error]}
            </div>
          )}

          {!picking && (
            <div>
              <label htmlFor="winnersNum">{lang.pickNumOfProfiles}</label>
              <input
                type="number"
                className="winners-num-input"
                value={settings.winnersNum}
                onChange={e => updateWinnersNum(e.currentTarget.value)}
                onBlur={e => validateWinnersNum(e.currentTarget.value, profiles.length)}
              />
            </div>
          )}

          <button
            className={`btn btn-success btn-lg ${
              !input || loading || picking || error ? "btn-disabled" : ""
            }`}
            disabled={!input || loading || picking || error}
            onClick={() => startPicking(profiles, settings.winnersNum, removeSpeed)}
          >
            {picking ? lang.picking : lang.start}
            <Spinner isActive={picking} />
          </button>
        </div>
      </div>
    );
  }
}

PickSettings.propTypes = {
  input: PropTypes.string.isRequired,
  profiles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  picking: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  settings: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    winnersNum: PropTypes.number.isRequired
  }),
  updateWinnersNum: PropTypes.func.isRequired,
  validateWinnersNum: PropTypes.func.isRequired,
  startPicking: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    input: state.input,
    profiles: state.profiles,
    loading: state.loading,
    picking: state.picking,
    error: state.error,
    settings: state.settings
  };
};

export default connect(
  mapStateToProps,
  { updateWinnersNum, validateWinnersNum, startPicking }
)(PickSettings);
