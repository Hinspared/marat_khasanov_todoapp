import React from 'react';

export interface InputFieldProps {
  name: string;
  otherProps?: any;
}

export type Todo = {
  id: number;
  name: string;
  description: string;
  type: string;
  color: string;
  author: string;
  subtasks: Subtask[];
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClose?: () => void;
};

export interface DetailedProps {
  onClose: () => void;
  subtasks: Subtask[];
}
export type Subtask = {
  id: number;
  name: string;
  description?: string;
  type: string;
  color: string;
  author: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export interface StateTodo {
  todos: object[];
}

export interface FCProps {
  open?: boolean;
  onSubmit?: () => void;
  onClick?: () => void;
  onClose?: (e: any) => void;
  children: React.ReactNode;
}

export interface TodoListProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface FormProps {
  name: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  options?: any;
  helperText?: string;
  multiline?: boolean;
  placeholder?: string;
}

export interface MenuProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClickCopy: () => void;
  onClickDelete: () => void;
  onClose?: (e: any) => void;
  open: boolean;
  anchorEl: null | HTMLElement;
}
