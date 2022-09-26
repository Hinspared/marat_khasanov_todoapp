import * as React from 'react';
import { Paper, Grid, Button, Typography, Box, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../setup/hooks';
import { Subtask, Todo, DetailedProps } from '../../../../setup/interfaces';
import CloseIcon from '@mui/icons-material/Close';
import ColorMenu from './ColorMenu';
import TypeMenu from './TypeMenu';
import { setTodo } from '../../../../setup/store/reducers/viewSlice';
import SubtaskItem from './SubtaskItem';

export default function TodoDetailed({ subtasks, onClose }: DetailedProps) {
  // Retrieve data from store
  const todo = useAppSelector((state) => state.view.todo);
  const types = useAppSelector((state) => state.view.types);
  const dispatch = useAppDispatch();

  // Render details of Todo or Subtask
  const [condition, setConidtion] = React.useState(true);
  const [subtask, setSubtask] = React.useState<Subtask>({
    id: 0,
    name: '',
    type: '',
    author: 'User',
    description: '',
    color: '',
  });

  const renderItem = condition ? todo : subtask;

  // Dispatch updated todo to store
  const [copy, setCopy] = React.useState(todo);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (condition) {
      console.log(copy);
      setCopy({ ...copy, [name]: value });
    } else {
      setSubtask({ ...subtask, [name]: value });
    }
  };
  React.useEffect(() => {
    const updatedSubtasks = copy.subtasks.map((sub: any) =>
      sub.id === subtask.id ? (sub = subtask) : sub
    );
    console.log(updatedSubtasks);
    setCopy({ ...copy, subtasks: updatedSubtasks });
  }, [subtask]);
  React.useEffect(() => {
    dispatch(setTodo(copy));
    console.log(copy);
  }, [copy]);

  // Set Subtask and render it
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = Number(e.currentTarget.dataset.id);
    const subtaskId = todo.subtasks.filter((subtask: any) => subtask.id === id);
    console.log(subtask);
    setSubtask(subtaskId[0]);
    setConidtion(false);
  };

  const author = renderItem.author
    ? renderItem.author[0].toUpperCase() + renderItem.author.slice(1)
    : 'User';

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h3">TODO</Typography>
        <Button onClick={onClose}>
          <CloseIcon />
        </Button>
      </Box>
      <Paper elevation={5} sx={{ borderRadius: '0.8rem', marginTop: '1rem' }}>
        <Box
          sx={{
            background: `${renderItem.color}`,
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
              value={renderItem.name}
              placeholder="TodoName"
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: '2.125rem',
                  padding: '0',
                  lineHeight: '1.167',
                },
              }}
            />
            <ColorMenu
              name="color"
              onChange={handleChange}
              value={renderItem.color}
            />
          </Grid>
          <Grid item xs={12} className="todoContainer">
            <TypeMenu
              name="type"
              onChange={handleChange}
              value={renderItem.type}
              options={types}
            />
            <Typography variant="body2">
              Subtasks: {subtasks?.length}
            </Typography>
          </Grid>
          <Grid item xs={12} marginTop={3} className="todoContainer">
            <Typography variant="h5">Description: </Typography>
            <Typography variant="h5">
              Author:
              {renderItem.author}
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
              <Typography>{renderItem.description}</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      {React.Children.toArray(
        todo.subtasks?.map((subtask: any) => (
          <SubtaskItem
            id={subtask.id}
            name={subtask.name}
            type={subtask.type}
            author={subtask.author}
            description={subtask.desription}
            color={subtask.color}
            onClick={handleClick}
          />
        ))
      )}
    </>
  );
}
