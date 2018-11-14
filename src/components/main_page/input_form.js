import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import localization from "../../lang";
import Spinner from "../spinner";
import PickSettings from "./pick_settings";
import { fetchProfilesPics, handleInput, removeAll } from "../../actions";
import InputHint from "./input_hint";

class InputForm extends Component {
  render() {
    const {
      input,
      profiles,
      winners,
      loading,
      removeAll,
      settings,
      handleInput,
      fetchProfilesPics
    } = this.props;
    const lang = localization[settings.lang];

    return (
      <div className="container input-container">
        <div className="row justify-content-center">
          <div className="col-md-4 input-column">
            <InputHint
              label={lang.howToAdd}
              hintContent={
                <img src="images/how-to.gif" alt="how to add profiles list" width="320" />
              }
            />
            <textarea
              className="form-control"
              onChange={event => handleInput(event.currentTarget.value)}
              value={input}
              rows={7}
              placeholder={lang.inputListPlaceholder}
            />
          </div>
          <div className="col-md-4 buttons input-column">
            <div className="button">
              <button
                className={`btn btn-primary btn-fix ${!input || loading ? "btn-disabled" : ""}`}
                onClick={() => fetchProfilesPics(input)}
                disabled={!input || loading}
              >
                {loading ? lang.loading : lang.load}
                <Spinner isActive={loading} />
              </button>
              {!!profiles.length && !loading && !winners.length && (
                <span>
                  {lang.loaded}
                  <span className="badge badge-pill badge-dark">{profiles.length}</span>
                </span>
              )}
            </div>

            {!!profiles.length && !loading && (
              <div className="button">
                <button className="btn btn-danger btn-fix" onClick={removeAll}>
                  {lang.clear}
                </button>
              </div>
            )}

            {!loading && profiles.length > 1 && !winners.length && <PickSettings />}
          </div>
        </div>
      </div>
    );
  }
}

InputForm.propTypes = {
  input: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  profiles: PropTypes.array.isRequired,
  winners: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  removeAll: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    winnersNum: PropTypes.number.isRequired
  })
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    input: state.input,
    profiles: state.profiles,
    winners: state.winners,
    settings: state.settings
  };
};

export default connect(
  mapStateToProps,
  { fetchProfilesPics, handleInput, removeAll }
)(InputForm);
