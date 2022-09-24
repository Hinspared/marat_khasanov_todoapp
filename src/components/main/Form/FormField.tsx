import TextField from '@mui/material/TextField';
import { FormProps } from '../../../setup/interfaces';

export default function FormField({
  name,
  type = 'text',
  multiline = false,
  onChange,
  helperText,
}: FormProps) {
  return (
    <div
      style={{
        paddingTop: '1.5rem',
      }}
    >
      <TextField
        name={name}
        multiline={multiline}
        onChange={onChange}
        autoComplete="off"
        label={name[0].toUpperCase() + name.slice(1)}
        fullWidth
        type={type}
        helperText={helperText}
      />
    </div>
  );
}
