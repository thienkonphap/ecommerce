import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
  },
  textField: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'black',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#b20000',
    },
  },
}));

const CreateAccountPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form className={classes.form}>
        <Typography variant="h4" gutterBottom>
        Let's get started SidewalkSwagger
        </Typography>
        <TextField
          className={classes.textField}
          label="Full Name"
          variant="outlined"
          required
        />
        <TextField
          className={classes.textField}
          label="Email Address"
          variant="outlined"
          type="email"
          required
        />
        <TextField
          className={classes.textField}
          label="Password"
          variant="outlined"
          type="password"
          required
        />
        <TextField
          className={classes.textField}
          label="Confirm Password"
          variant="outlined"
          type="password"
          required
        />
        <Button
          className={classes.button}
          variant="contained"
          size="large"
          disableElevation
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
