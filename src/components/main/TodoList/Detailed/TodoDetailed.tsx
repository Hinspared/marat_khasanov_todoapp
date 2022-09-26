import * as React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../setup/hooks';
import { Subtask, DetailedProps } from '../../../../setup/interfaces';
import CloseIcon from '@mui/icons-material/Close';
import { setTodo } from '../../../../setup/store/reducers/viewSlice';
import SubtaskItem from './SubtaskItem';
import { addSubtask } from '../../../../setup/store/reducers/todoSlice';
import TodoContainer from './TodoContainer';

export default function TodoDetailed({ onClose }: DetailedProps) {
  // Retrieve data from store
  const todo = useAppSelector((state) => state.view.todo);
  const dispatch = useAppDispatch();
  
  // Render details of Todo or Subtask
  const [condition, setCondition] = React.useState(true);
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
      setCopy({ ...copy, [name]: value });
      dispatch(addSubtask(copy));
    } else {
      setSubtask({ ...subtask, [name]: value });
      dispatch(addSubtask(copy));
    }
  };

  // Keep Copy up to Todo from store
  React.useEffect(() => {
    setCopy(todo);
  }, [todo]);
  React.useEffect(() => {
    const updatedSubtasks = copy.subtasks.map((sub: any) =>
      sub.id === subtask.id ? (sub = subtask) : sub
    );
    setCopy({ ...copy, subtasks: updatedSubtasks });
  }, [subtask]);
  React.useEffect(() => {
    dispatch(setTodo(copy));
  }, [copy]);

  // Set Subtask and render it
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = Number(e.currentTarget.dataset.id);
    const subtaskId = todo.subtasks.filter((subtask: any) => subtask.id === id);
    setSubtask(subtaskId[0]);
    setCondition(false);
  };

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
      <TodoContainer
        id={renderItem.id}
        name={renderItem.name}
        type={renderItem.type}
        author={renderItem.author}
        description={renderItem.description}
        color={renderItem.color}
        onChange={handleChange}
        subtasks={renderItem?.subtasks}
      />

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
