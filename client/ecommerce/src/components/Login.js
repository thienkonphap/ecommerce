import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import Link from '@mui/material/Link';
import { useEffect, useState } from 'react';
import axios, * as others from 'axios';

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

function signin(username, password) {
  let payload = { email: username, password: password }
  console.log(payload)
  axios.post("http://localhost:4000/login",payload).then(res=>{
    console.log(res.data)
    localStorage.setItem("userid", res.data.userid)
    window.location.href = '/product'
  }).catch(erro => alert("Email or Password incorrect"))
}
const LoginPage = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const handleTextInputChange = event => {
    setEmail(event.target.value);
};
const handleTextInputChange2 = event => {
  setPassword(event.target.value);
};

  return (
    <Container className={classes.container}>
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
          value= {email}
          onChange= {handleTextInputChange}
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
          value= {password}
          onChange= {handleTextInputChange2}
          className={classes.textField}
        />
        <div className='createNewAccount'>
        <a>No account ? </a> <Link href = '/createnew'> Create one</Link>
        </div>
        <Button
          onClick={() => {console.log(email, password);signin(email, password)}}
          type=""
          fullWidth
          variant="contained"
          color="primary"
          style={{ backgroundColor: 'black', color: 'white' }}
        >
          Sign In
        </Button>
    </Container>
  );
};

export default LoginPage;
