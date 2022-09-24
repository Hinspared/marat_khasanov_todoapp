import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem, Typography } from '@mui/material';
import { FormProps } from '../../../../setup/interfaces';
import { useAppSelector } from '../../../../setup/hooks';

export default function TypeMenu({
  name,
  value,
  onChange,
  defaultValue,
  options,
}: FormProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6">Type: </Typography>
      <TextField
        name={name}
        type="select"
        select
        variant="standard"
        value={value}
        // defaultValue={defaultValue}
        SelectProps={{ IconComponent: () => null }}
        InputProps={{
          disableUnderline: true,
        }}
        onChange={onChange}
      >
        {React.Children.toArray(
          options.map((option: any) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))
        )}
      </TextField>
    </div>
  );
}
