import React from "react";
import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { ErrorMessage } from "formik";

function GenderCheckbox({ value, onChange, onBlur }) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="gender"
        name="gender"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="female" control={<Radio />} label="Female" />
      </RadioGroup>
      <ErrorMessage
        name="gender"
        component="div"
        style={{ color: "#d42f53" }}
      />
    </FormControl>
  );
}

export default GenderCheckbox;
