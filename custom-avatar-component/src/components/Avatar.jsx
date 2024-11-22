import PropType from "prop-types";
import avatarInitials from "./initials.js";
import { avatarStyles } from "./avatarStyles.js";

function Avatar({
  name,
  size = 200,
  bgcolor = "black",
  fontColor = "white",
  radius = 0,
}) {
  const initials = avatarInitials(name);
  const avatarTheme = avatarStyles(size, bgcolor, fontColor, radius);

  return (
    <div className="avatar-container" style={avatarTheme}>
      <h1>{initials}</h1>
    </div>
  );
}

export default Avatar;
Avatar.propTypes = {
  name: PropType.string.isRequired,
  size: PropType.number,
  bgcolor: PropType.string,
  fontColor: PropType.string,
  radius: PropType.number,
};
