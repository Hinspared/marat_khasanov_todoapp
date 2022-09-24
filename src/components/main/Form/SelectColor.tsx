import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { FormProps } from '../../../setup/interfaces';

export default function SelectColor({
  name,
  value,
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
  );
}
