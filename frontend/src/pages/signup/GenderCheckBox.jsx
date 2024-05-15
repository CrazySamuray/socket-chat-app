import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

function GenderCheckbox({ value, onChange }) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="gender"
        name="gender"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
    </FormControl>
  );
}

export default GenderCheckbox;
