import { Paper, Grid, Typography, Box, TextField } from '@mui/material';
import { useAppSelector } from '../../../../setup/hooks';
import ColorMenu from './ColorMenu';
import TypeMenu from './TypeMenu';
import { RenderItemProps } from '../../../../setup/interfaces';

export default function TodoContainer({
  id,
  name,
  type,
  description,
  subtasks,
  color,
  onChange,
}: RenderItemProps) {
  const types = useAppSelector((state) => state.view.types);
  return (
    <>
      <Paper
        elevation={5}
        data-id={id}
        sx={{ borderRadius: '0.8rem', marginTop: '1rem' }}
      >
        <Box
          sx={{
            background: `${color}`,
            height: '1rem',
            borderRadius: '0.8rem 0.8rem 0 0',
          }}
        ></Box>
        <Grid justifyContent="center" padding={1}>
          <Grid item xs={12} className="todoContainer" marginBottom={3}>
            <TextField
              autoComplete="off"
              variant="standard"
              name="name"
              value={name}
              placeholder="TodoName"
              onChange={onChange}
              maxRows={3}
              multiline
              inputProps={{ maxLength: 16 }}
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: '2.125rem',
                  padding: '0',
                  lineHeight: '1.167',
                },
              }}
            />
            <ColorMenu name="color" onChange={onChange} value={color} />
          </Grid>
          <Grid item xs={12} className="todoContainer">
            <TypeMenu
              name="type"
              onChange={onChange}
              value={type}
              options={types}
            />
            <Typography variant="body2">
              Subtasks: {subtasks?.length}
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop={3} className="todoContainer">
            <div
              style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
                maxHeight: '5rem',
                overflowWrap: 'break-word',
              }}
            >
              <Typography>{description}</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
