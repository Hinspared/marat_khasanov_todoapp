import * as React from 'react';
import FormDialog from './Form/FormDialog';
import FormField from './Form/FormField';
import { request } from '../../helpers/request';
import Select from './Form/Select';
import { useAppDispatch, useAppSelector } from '../../setup/hooks';
import { addTodo } from '../../setup/store/reducers/todoSlice';
import * as yup from 'yup';
import { useFormik } from 'formik';
import SelectColor from './Form/SelectColor';
import TodoList from './TodoList/TodoList';
import { addSubtask, setTypes } from '../../setup/store/reducers/viewSlice';

export default function Main() {
  const dispatch = useAppDispatch();

  // Data for type field
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    request().then((result: any) => {
      setData(result);
      dispatch(setTypes(result));
    });
  }, []);

  // Add todo or subtask
  const id = useAppSelector((state) => state.view.todo.id);
  const active = useAppSelector((state) => state.view.active);

  // Data to validate name for uniqueness
  const todos = useAppSelector((state) => state.todos);
  const activeTodo = useAppSelector((state) => state.view.todo);
  const names: string[] = Object.values(todos.map((todo: any) => todo.name));
  const subtasksName = Object.values(activeTodo.subtasks).map(
    (subtask: any) => subtask.name
  );
  const unique = active ? names : subtasksName;

  // Open dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Formik
  const initialValues = {
    id: 0,
    name: '',
    type: '',
    color: '',
    description: '',
    subtasks: [],
    author: 'user',
  };
  const formValidation = yup.object().shape({
    name: yup
      .string()
      .required('Required')
      .notOneOf(unique, 'title already exists')
      .max(16, 'Max length is 16'),
    type: yup.string().required('required'),
    color: yup.string().required('required'),
    description: yup.string().max(100, 'max length is 100'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: formValidation,
    onSubmit: (values) => {
      active ? dispatch(addTodo(values)) : dispatch(addSubtask(values));
      setOpen(false);
      values.id = 0;
      values.name = '';
      values.type = '';
      values.color = '';
      values.description = '';
      (values.subtasks = []), (values.author = 'user');
    },
    onReset: (values) => {
      values.id = 0;
      values.name = '';
      values.type = '';
      values.color = '';
      values.description = '';
      (values.subtasks = []), (values.author = 'user');
      setOpen(false);
    },
  });

  return (
    <>
      <TodoList />
      <FormDialog
        open={open}
        onClose={formik.handleReset}
        onClick={handleClickOpen}
        onSubmit={formik.handleSubmit}
      >
        <Select
          name="type"
          options={data}
          onChange={formik.handleChange}
          value={formik.values.type}
          helperText={formik.errors.type}
        />
        <SelectColor
          name="color"
          onChange={formik.handleChange}
          value={formik.values.color}
          helperText={formik.errors.color}
        />
        <FormField
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          helperText={formik.errors.name}
        />
        <FormField
          name="author"
          value={formik.values.author}
          onChange={formik.handleChange}
          placeholder="User"
        />
        <FormField
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          multiline
          helperText={formik.errors.description}
        />
      </FormDialog>
    </>
  );
}
