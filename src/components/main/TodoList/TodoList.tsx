import * as React from 'react';
import Container from '@mui/material/Container';
import { Stack, Typography, Paper } from '@mui/material';
import TodoItem from './List/TodoItem';
import { useAppSelector, useAppDispatch } from '../../../setup/hooks';
import { Todo } from '../../../setup/interfaces';
import TodoDetailed from './Detailed/TodoDetailed';
import {
  toggleOn,
  toggleOff,
  setTodo,
} from '../../../setup/store/reducers/viewSlice';
import SubtaskItem from './Detailed/SubtaskItem';
import { addSubtask } from '../../../setup/store/reducers/todoSlice';

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos);
  const todo = useAppSelector((state) => state.view.todo);
  const active = useAppSelector((state) => state.view.active);

  const dispatch = useAppDispatch();

  const handleClickClose = () => {
    dispatch(toggleOn());
    dispatch(addSubtask(todo));
  };

  // Set Todo on Click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as Element;
    if (target.innerHTML === '...') return;
    if (target.innerHTML === 'Copy') return;
    if (target.innerHTML === 'Delete') return;
    if (target.classList.contains('MuiBackdrop-root')) return;
    // Set active Todo to render details
    const id = Number(e.currentTarget.dataset.id);
    const todoId = todos.filter((todo: any) => todo.id === id);
    // Equal to spread operator, Typescript show error 2556
    dispatch(setTodo.apply(null, todoId));
    // dispatch(setTodo(...todoId);
    // Toggle between TodoList and TodoDetailed
    dispatch(toggleOff());
  };
  React.useEffect(() => {});

  return active ? (
    <Container maxWidth="md" sx={{ paddingTop: '3rem' }}>
      <Typography variant="h3">LIST</Typography>
      <Stack spacing={3} marginTop={3}>
        {React.Children.toArray(
          todos.map((todo: Todo) => (
            <TodoItem
              id={todo.id}
              type={todo.type}
              name={todo.name}
              author={todo.author}
              description={todo.description}
              color={todo.color}
              subtasks={todo.subtasks}
              onClick={handleClick}
            />
          ))
        )}
      </Stack>
    </Container>
  ) : (
    <Container>
      <TodoDetailed
        id={todo.id}
        name={todo.name}
        author={todo.author}
        description={todo.description}
        type={todo.type}
        color={todo.color}
        onClose={handleClickClose}
        subtasks={todo.subtasks}
      />
      <Paper elevation={5} sx={{ marginTop: '3rem' }}>
        {React.Children.toArray(
          todo.subtasks?.map((subtask: any) => (
            <SubtaskItem
              id={subtask.id}
              name={subtask.name}
              type={subtask.type}
              author={subtask.author}
              description={subtask.desription}
              color={subtask.color}
            />
          ))
        )}
      </Paper>
    </Container>
  );
}
