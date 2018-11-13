import React from "react";
import PropTypes from "prop-types";

const ProfilePic = props => {
  const { img, name, removed, removingTime, winner } = props;

  //  If profile has removed state then apply according css and inline style
  return removed ? (
    <div
      className={`profile${removed ? " removed" : ""}`}
      style={{ animation: `removing ${removingTime}ms ease` }}
    >
      <span className="tooltiptext">{name}</span>
      <a href={`https://instagram.com/${name}`} target="_blank" rel="noopener noreferrer">
        <img src={img} className="rounded-circle" alt={name} />
      </a>
    </div>
  ) : (
    //  If profile is not removed - apply 'profile' or 'winner' CSS class
    <div className={`profile${winner ? " winner" : ""}`}>
      <span className="tooltiptext">{name}</span>
      <a href={`https://instagram.com/${name}`} target="_blank" rel="noopener noreferrer">
        <img src={img} className="rounded-circle" alt={name} />
      </a>
    </div>
  );
};

ProfilePic.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  removed: PropTypes.bool.isRequired,
  removingTime: PropTypes.number.isRequired,
  winner: PropTypes.bool.isRequired
};

export default ProfilePic;
