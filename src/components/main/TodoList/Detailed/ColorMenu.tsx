import TextField from '@mui/material/TextField';
import { MenuItem, Typography } from '@mui/material';
import { FormProps } from '../../../../setup/interfaces';

export default function ColorMenu({
  name,
  value,
  onChange,
  defaultValue,
}: FormProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <Typography variant="h6">Color</Typography>
      <TextField
        name={name}
        select
        variant="standard"
        SelectProps={{ IconComponent: () => null }}
        defaultValue={defaultValue}
        value={value}
        sx={{
          width: '5rem',
        }}
        InputProps={{
          disableUnderline: true,
        }}
        onChange={onChange}
      >
        <MenuItem value="#E84545" sx={{ color: '#E84545' }}>
          Red
        </MenuItem>
        <MenuItem value="#3CCF4E" sx={{ color: '#3CCF4E' }}>
          Green
        </MenuItem>
        <MenuItem value="#00ADB5" sx={{ color: '#00ADB5' }}>
          Blue
        </MenuItem>
      </TextField>
    </div>
  );
}
