import * as React from 'react';
import { Paper, Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../setup/hooks';
import { deleteTodo } from '../../../../setup/store/reducers/todoSlice';
import { Todo } from '../../../../setup/interfaces';
import Menu from '../Detailed/BasicMenu';

export default function TodoItem({
  id,
  name,
  type,
  color,
  subtasks,
  onClick,
}: Todo) {
  const dispatch = useAppDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  //   Menu handlers
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(`name: ${name}, type: ${type}`);
    alert('Text copied');
  };
  return (
    <Paper
      elevation={5}
      sx={{ background: `${color}` }}
      data-id={id}
      onClick={onClick}
    >
      <Grid container spacing={0} p="1rem 1rem" justifyContent="center">
        <Grid item xs={12}>
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClick={handleClick}
            onClose={handleClose}
            onClickCopy={handleCopyClick}
            onClickDelete={handleDeleteClick}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5">
            {name[0].toUpperCase() + name.slice(1)}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">Type: {type}</Typography>
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
  );
}
