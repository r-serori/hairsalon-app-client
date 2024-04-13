import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SingleCheckBox({ label, value, onChange }) {
  return (
    <Autocomplete
      disablePortal
      id={label}
      options={value}
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={onChange}
    />
  );
}
