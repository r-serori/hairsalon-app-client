import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

interface ControlledCheckboxProps {
  type?: string;
  checked: boolean;
  onChanger: (newValue: boolean) => void;
}

const ControlledCheckbox: React.FC<ControlledCheckboxProps> = ({
  type,
  checked, // Destructure the checked property from the props
  onChanger,
}) => {
  const label = { inputProps: { "aria-label": "controlled" } };
  return (
    <Checkbox
      checked={type === "disabled" ? true : checked}
      onChange={(newValue) => {
        onChanger(newValue.target.checked);
        console.log("newValueです", newValue);
      }}
      {...label}
      icon={<FavoriteBorder />}
      checkedIcon={<Favorite />}
      disabled={type === "disabled"}
    />
  );
};

export default ControlledCheckbox;
