import React, { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Profile from "./profile";
import Spinner from "../spinner";
import { calculateRemovingSpeed } from "../../helpers";
import localization from "../../lang";

class ProfilesList extends PureComponent {
  render() {
    const { profiles, winners, removedItems, settings, loading } = this.props;

    //  Defining columns num for grid table based on number of profiles
    const columnsNum = winners.length ? winners.length : profiles.length > 20 ? 25 : 10;

    //  Calculating remove animation speed based on number of profiles
    const removeSpeed = calculateRemovingSpeed(profiles.length);

    const lang = localization[settings.lang];

    const winnersText = winners.length ? (
      <div className="winners_text">
        <h3>{winners.length === 1 ? lang.winner : lang.winners}</h3>
      </div>
    ) : null;

    return loading ? (
      <div className="profiles-container text-center">
        <h3>
          <Spinner isActive={loading} />
        </h3>
      </div>
    ) : (
      <div className="profiles-container">
        {winnersText}
        <div
          className="profiles"
          style={{
            gridTemplateColumns: `repeat(${columnsNum}, minmax(25px, ${
              winners.length ? "100" : "77"
            }px))`
          }}
        >
          {profiles &&
            profiles.map((profile, id) => (
              <Profile
                img={profile.img}
                name={profile.name}
                key={profile.name}
                removed={removedItems.includes(id)}
                winner={winners.includes(profile.name)}
                removingTime={removeSpeed}
              />
            ))}
        </div>
      </div>
    );
  }
}

ProfilesList.propTypes = {
  profiles: PropTypes.array.isRequired,
  winners: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  removedItems: PropTypes.array.isRequired,
  settings: PropTypes.shape({
    lang: PropTypes.string.isRequired,
    winnersNum: PropTypes.number.isRequired
  })
};

const mapStateToProps = state => {
  return {
    profiles: state.profiles,
    removedItems: state.removedItems,
    winners: state.winners,
    settings: state.settings,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(ProfilesList);
