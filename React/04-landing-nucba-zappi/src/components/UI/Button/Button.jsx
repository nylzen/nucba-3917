import * as s from "./ButtonStyles";

export const Button = ({
  children,
  radius = "32",
  secondary,
  disabled = false,
}) => {
  return (
    <s.Button
      whileTap={{ scale: 0.95 }}
      radius={radius}
      secondary={secondary}
      disabled={disabled}
    >
      {children}
    </s.Button>
  );
};
