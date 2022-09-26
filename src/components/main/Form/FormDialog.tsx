import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FCProps } from '../../../setup/interfaces';
import { useAppSelector } from '../../../setup/hooks';

export default function FormDialog({
  open = false,
  onSubmit,
  onClose,
  onClick,
  children,
}: FCProps) {
  const active = useAppSelector((state) => state.view.active);

  const title = active ? 'task' : 'subtask';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '65%',
        margin: '0 auto',
      }}
    >
      <Button onClick={onClick} sx={{ marginTop: '2rem' }}>
        <AddCircleIcon color="primary" sx={{ fontSize: '5rem' }} />
      </Button>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle sx={{ textAlign: 'center' }}>Add new {title}</DialogTitle>
        <DialogContent>
          <Stack spacing={2}>{children}</Stack>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={onSubmit}
            variant="contained"
            sx={{ background: '#0096FF', maxWidth: '87%' }}
            fullWidth
            type="submit"
          >
            ADD YOUR THING
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
