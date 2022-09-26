import * as React from 'react';
import { Stack, Typography, Paper, Box } from '@mui/material';
import TodoItem from './List/TodoItem';
import { useAppSelector, useAppDispatch } from '../../../setup/hooks';
import { Todo } from '../../../setup/interfaces';
import TodoDetailed from './Detailed/TodoDetailed';
import {
  toggleOn,
  toggleOff,
  setTodo,
} from '../../../setup/store/reducers/viewSlice';
import { addSubtask } from '../../../setup/store/reducers/todoSlice';

export default function TodoList() {
  const todos = useAppSelector((state) => state.todos);
  const todo = useAppSelector((state) => state.view.todo);
  const active = useAppSelector((state) => state.view.active);

  const dispatch = useAppDispatch();

  const handleClickClose = () => {
    if (todo.name.length === 0) {
      alert('TodoName is empty');
      return;
    }
    dispatch(toggleOn());
    dispatch(addSubtask(todo));
  };
  const listText =
    Object.values(todos).length !== 0 ? 'LIST' : 'Your list is empty';
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

  return active ? (
    <Box sx={{ paddingTop: '3rem', width: '65%', margin: '0 auto' }}>
      <Typography variant="h3">{listText}</Typography>
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
    </Box>
  ) : (
    <Box sx={{ paddingTop: '3rem', width: '65%', margin: '0 auto' }}>
      <TodoDetailed onClose={handleClickClose} subtasks={todo.subtasks} />
    </Box>
  );
}
