import React from "react";
import PropTypes from "prop-types";

import { BASE_URL } from "../../constants";

const Profile = props => {
  const { img, name, removed, removingTime, winner } = props;

  const className = `profile${removed ? " removed" : ""}${winner ? " winner" : ""}`;
  const animationStyle = removed ? `removing ${removingTime}ms ease` : "";

  return (
    <div className={className} style={{ animation: animationStyle }}>
      <span className="tooltiptext">{name}</span>
      <a href={`${BASE_URL}/${name}`} target="_blank" rel="noopener noreferrer">
        <img src={img} className="rounded-circle" alt={name} />
      </a>
    </div>
  );
};

Profile.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removed: PropTypes.bool.isRequired,
  removingTime: PropTypes.number.isRequired,
  winner: PropTypes.bool.isRequired
};

export default Profile;
