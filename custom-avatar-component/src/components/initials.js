function avatarInitials(name) {
  const initials = name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .toUpperCase();
  return initials;
}

export default avatarInitials;
