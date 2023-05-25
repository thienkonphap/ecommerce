import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios, * as others from 'axios';
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
function createUser(username, email, password) {
  let payload = { username: username, email: email,password: password }
  console.log(payload)
  axios.post("http://localhost:4000/newuser",payload).then(res=>{
    console.log(res.data)
    window.location.href = '/account'
  }).catch(erro => alert("Something wrong, please try again"))
}
const CreateAccountPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('')
  const handleTextInputChange3 = event => {
    setUserName(event.target.value);
  };
  const handleTextInputChange = event => {
    setEmail(event.target.value);
  };
  const handleTextInputChange2 = event => {
    setPassword(event.target.value);
  };
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
          value={userName}
          onChange={handleTextInputChange3}
          required
        />
        <TextField
          className={classes.textField}
          label="Email Address"
          variant="outlined"
          type="email"
          value={email}
          onChange={handleTextInputChange}
          required
        />
        <TextField
          className={classes.textField}
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handleTextInputChange2}
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
          onClick={() => {createUser(userName, email, password)}}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default CreateAccountPage;
