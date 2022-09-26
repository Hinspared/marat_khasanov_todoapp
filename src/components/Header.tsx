import Grid from '@mui/material/Grid';
import { Typography, Paper } from '@mui/material';
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
    <Paper elevation={4} square>
      <Grid
        container
        spacing={0}
        sx={{
          width: '65%',
          margin: '0 auto',
        }}
      >
        <Grid item xs={7}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '3rem',
            }}
          >
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
          <Typography variant="h1" color="initial" sx={{ marginLeft: 'auto' }}>
            {Object.values(todos).length}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
console.log();
