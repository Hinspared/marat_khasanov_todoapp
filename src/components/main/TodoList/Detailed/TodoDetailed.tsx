import * as React from 'react';
import { Paper, Grid, Button, Typography, Box, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../setup/hooks';
import { Todo } from '../../../../setup/interfaces';
import CloseIcon from '@mui/icons-material/Close';
import ColorMenu from './ColorMenu';
import TypeMenu from './TypeMenu';

export default function TodoDetailed({
  id,
  name,
  description,
  color,
  subtasks,
  onClick,
  onClose,
}: Todo) {
  const todo = useAppSelector((state) => state.view.todo);
  const types = useAppSelector((state) => state.view.types);

  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value, todo);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '2rem 0 2rem 0',
        }}
      >
        <TextField
          autoComplete="off"
          variant="standard"
          placeholder={name.toUpperCase()}
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: '2rem',
            },
          }}
        />
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Paper
        elevation={5}
        sx={{ background: `${color}` }}
        onClick={onClick}
        data-id={id}
      >
        <Grid container spacing={0} p="1rem 1rem" justifyContent="center">
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <ColorMenu
              name="color"
              onChange={handleChange}
              defaultValue={todo.color}
            />
          </Grid>
          <Grid item xs={3}>
            <TypeMenu
              name="type"
              onChange={handleChange}
              value={todo.type}
              options={types}
            />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" textAlign="center">
              {description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="body2">
              Number of subtasks: {subtasks?.length}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
