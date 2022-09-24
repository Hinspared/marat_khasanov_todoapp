import * as React from 'react';
import { Subtask, Todo } from '../../../../setup/interfaces';
import { Grid, Typography, Divider } from '@mui/material';

export default function SubtaskItem({ name, type }: Subtask) {
  return (
    <>
      <Grid container spacing={1} marginTop={2} padding={1}>
        <Grid item xs={6}>
          <Typography variant="h5">Name: {name}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">Type: {type}</Typography>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
}
