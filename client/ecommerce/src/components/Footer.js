import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(4),
    marginTop: 'auto',
    marginTop: 30
  },
  contact: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    marginLeft: 30
  },
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 30,
    color: '#666',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: '#333',
    },
  },
  email: {
    marginLeft: 30
  },
  phone: {
    marginLeft: 30
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} justify="space-between" alignItems="center">
      <Grid item xs={12} sm={6}>
        <Typography className={classes.contact}>Contact Us:</Typography>
        <Typography className={classes.email} variant="body2">Email: info@streetstyle.com</Typography>
        <Typography className={classes.phone} variant="body2">Phone: 555-555-5555</Typography>
      </Grid>
      <Grid item xs={12} sm={6} container justify="flex-end">
        <Link href="https://www.facebook.com/" target="_blank" rel="noopener" className={classes.icon}>
          <FacebookIcon />
        </Link>
        <Link href="https://www.twitter.com/" target="_blank" rel="noopener" className={classes.icon}>
          <TwitterIcon />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank" rel="noopener" className={classes.icon}>
          <InstagramIcon />
        </Link>
      </Grid>
    </Grid>
  );
}

export default Footer;
