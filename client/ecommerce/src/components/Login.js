import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import Link from '@mui/material/Link';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <form className={classes.form} noValidate>
        <Typography variant="h5" component="h1">
          Login
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          className={classes.textField}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          className={classes.textField}
        />
        <div className='createNewAccount'>
        <a>No account ? </a> <Link href = '/createnew'> Create one</Link>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submitButton}
          style={{ backgroundColor: 'black', color: 'white' }}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;
