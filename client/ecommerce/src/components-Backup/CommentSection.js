import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Typography } from '@material-ui/core';
import Paper from '@mui/material/Paper';
import '../styles/CommentSection.css';
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
}));

function CommentSection({ comments }) {
  const classes = useStyles();

  return (
    <div className='commenSection' style={{}}>
      <Paper elevation={5} className='comment'>
        <Grid container alignItems="center" key={comments.id}>
          <Grid item>
            <Avatar
              className={classes.avatar}
              alt={comments.author}
              src={comments.avatarUrl}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="subtitle1" style={{fontWeight: 800}}>
              {comments.author}
            </Typography>
            <Typography variant="body1">{comments.text}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
export default CommentSection