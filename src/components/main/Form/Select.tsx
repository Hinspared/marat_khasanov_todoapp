import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { FormProps } from '../../../setup/interfaces';

export default function Select({
  name,
  value,
  options,
  onChange,
  helperText,
}: FormProps) {
  return (
    <TextField
      name={name}
      label={name[0].toUpperCase() + name.slice(1)}
      type="select"
      select
      fullWidth
      variant="standard"
      onChange={onChange}
      value={value}
      helperText={helperText}
    >
      {React.Children.toArray(
        options.map((option: any) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))
      )}
    </TextField>
  );
}
