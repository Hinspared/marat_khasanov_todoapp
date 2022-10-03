import * as React from 'react';
import { Paper, Grid, Typography, Box } from '@mui/material';
import { useAppDispatch } from '../../../../setup/hooks';
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
    setAnchorEl(null);
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
    setAnchorEl(null);
  };
  return (
    <Paper
      elevation={5}
      sx={{ borderRadius: '0.8rem' }}
      data-id={id}
      onClick={onClick}
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
          <Typography variant="h4">
            {name[0].toUpperCase() + name.slice(1)}
          </Typography>
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClick={handleClick}
            onClose={handleClose}
            onClickCopy={handleCopyClick}
            onClickDelete={handleDeleteClick}
          />
        </Grid>
        <Grid item xs={12} className="todoContainer">
          <Typography variant="h6">Type: {type}</Typography>
          <Typography variant="body2">Subtasks: {subtasks?.length}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
