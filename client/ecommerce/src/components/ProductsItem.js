import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductsItem.css'
import axios, * as others from 'axios';


function ProducstItem({id, image, name, price, imageHover }) {

    const [imageSrc, setImageSrc] = useState(image);

    const handleMouseEnterImage = () => setImageSrc(imageHover)
    const handleMouseLeaveImage = () => setImageSrc(image)
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("id")
    const [item, setItem] = useState([]);
      
      const getPosts = async () => {
            axios.get('http://localhost:4000/products')
                  .then((respone)=>{
                        console.log(respone.data)
                        setItem(respone.data);
                  })
                  console.log(type)
      };
      useEffect(() => {
        getPosts();
      }, []);
    return (
        <div className='productsItem'>
            <Grid key={name} item xs={12} sm={6} md={4} style={{ width: '100%' }}>
                <Card style={{ width: '300px' }} onMouseOver={handleMouseEnterImage} onMouseOut={handleMouseLeaveImage}>
                    <CardMedia component="img" image={imageSrc} alt={name} />
                    <CardContent>
                        <Typography className='productName' variant="h5" component="h2" component={Link} to={'/product/id=' + id} style={{textDecoration: 'none', textTransform:'none', color: 'black'}}>
                            {name}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            {price}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}

export default ProducstItem;
