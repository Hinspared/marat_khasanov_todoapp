import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { RootState } from '../setup/store/store';
import { useAppSelector } from '../setup/hooks';

export default function Header() {
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const todos = useAppSelector<RootState>((state) => state.todos);

  const date = new Intl.DateTimeFormat(navigator.language, options).format(
    new Date()
  );
  return (
    <div
      style={{
        padding: '0',
        margin: '0',
        borderRadius: '1rem',
        background: '#FFCFDF',
      }}
    >
      <Grid container spacing={0} sx={{ p: '0', m: '0' }}>
        <Grid item xs={7} sx={{ p: '1rem' }}>
          <Typography variant="h3">
            Your <br /> Things
          </Typography>
          <Typography variant="body1">{date}</Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            color="initial"
            sx={{ marginLeft: 'auto', marginRight: 'auto' }}
          >
            {Object.values(todos).length}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
console.log();
