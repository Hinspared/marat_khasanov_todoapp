import * as React from 'react';
import { Subtask, Todo } from '../../../../setup/interfaces';
import { Grid, Typography, Paper } from '@mui/material';

export default function SubtaskItem({
  name,
  type,
  color,
  onClick,
  id,
}: Subtask) {
  return (
    <Paper
      sx={{
        marginTop: '2rem',
        boxShadow: `0 0 3px 3px ${color}`,
      }}
      onClick={onClick}
      data-id={id}
    >
      <Grid container spacing={1} marginTop={2} padding={1}>
        <Grid item xs={6}>
          <Typography variant="h5">{name.toUpperCase()}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" textAlign="right">
            {type}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
