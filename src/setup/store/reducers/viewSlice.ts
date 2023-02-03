import { createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../interfaces';

const initState = {
  active: true,
  types: ['personal', 'business'],
  todo: <Todo>{
    id: Date.now(),
    name: '',
    description: '',
    type: '',
    color: '',
    subtasks: [],
  },
};

const viewSlice = createSlice({
  name: 'view',
  initialState: initState,
  reducers: {
    toggleOn: (state) => {
      state.active = true;
    },
    toggleOff: (state) => {
      state.active = false;
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    addSubtask: (state, action) => {
      const newSubtask = {
        id: Date.now(),
        name: action.payload.name,
        description: action.payload.description,
        type: action.payload.type,
        color: action.payload.color,
      };
      state.todo.subtasks.push(newSubtask);
    },
    setTypes: (state, action) => {
      state.types = action.payload;
    },
  },
});

export const { toggleOn, toggleOff, setTodo, addSubtask, setTypes } =
  viewSlice.actions;

export default viewSlice.reducer;
