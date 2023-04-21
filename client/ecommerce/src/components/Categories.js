import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import { Link } from '@material-ui/core';
import '../styles/Categories.css'
function Categories() {
  return (
    <div className='categories'>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={3}>
          <Paper className="category" elevation={12}>
            <img src={require("../img/t-shirt1.jpeg")} alt="Category 1" width="100%" />
          </Paper>
          <Link href = "/product" variant="subtitle1" align="center" className='describe' style={{ textDecoration: 'none' }}>
            <div style={{ textAlign: 'center' }}>TOP</div>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Paper className="category" elevation={12}>
            <img src={require("../img/bottom1.jpeg")} alt="Category 1" width="100%" />
          </Paper>
          <Link href = "/product" variant="subtitle1" align="center" className='describe' style={{ textDecoration: 'none' }}>
          <div style={{ textAlign: 'center' }}>Bottom</div>
          </Link>
        </Grid>
        <Grid item xs={3} >
          <Paper className="category" elevation={12}>
            <img src={require("../img/outwear1.jpeg")} alt="Category 1" width="100%" />
          </Paper>
          <Link href = "/product" variant="subtitle1" align="center" className='describe'style={{ textDecoration: 'none' }}>
            <div style={{ textAlign: 'center' }}>Outwear</div>
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Paper className="category" elevation={12}>
            <img src={require("../img/accesories1.jpeg")} alt="Category 1" width="100%" />
          </Paper>
          <Link href = "/product" variant="subtitle1" align="center" className='describe' style={{ textDecoration: 'none' }}>
            <div style={{ textAlign: 'center' }}>ACCESSORIES</div>
          </Link>
        </Grid>

      </Grid>
    </div>
  )
}

export default Categories