import PropTypes, { element } from "prop-types";
import PorpTypes from "prop-types";

function ProfileCard({ name, age, isMember, hobbies, onHobbyClick }) {
  return (
    <div className="profile-card">
      <h3>Name: {name}</h3>

      <h3>Age: {age}</h3>

      <h3>Status: {isMember ? "Active Member" : "Guest Member"}</h3>

      <h3>hobbies: </h3>
      <ul>
        {hobbies.map((hobby, index) => {
          return (
            <li key={index} onClick={() => onHobbyClick(hobby)}>
              {hobby}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PorpTypes.string,
  age: PorpTypes.number,
  isMember: PropTypes.bool.isRequired,
  hobbies: PorpTypes.arrayOf(PorpTypes.string),
};

export default ProfileCard;
