export function avatarStyles(size, bgcolor, fontColor, radius) {
  const avatarStyles = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: `${bgcolor}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: `${size / 4}px`,
    color: `${fontColor}`,
    borderRadius: `${radius}px`,
  };

  return avatarStyles;
}
