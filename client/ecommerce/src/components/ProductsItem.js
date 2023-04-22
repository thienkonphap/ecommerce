import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Fade from "@mui/material/Fade";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from '@mui/material/Box';
import { useState } from 'react';
import '../styles/ProductsItem.css'


function ProducstItem({ image, name, price, imageHover }) {

    const [imageSrc, setImageSrc] = useState(image);

    const handleMouseEnterImage = () => setImageSrc(imageHover)
    const handleMouseLeaveImage = () => setImageSrc(image)

    return (
        <div className='productsItem'>
            <Grid key={name} item xs={12} sm={6} md={4} style={{ width: '100%' }}>
                <Card style={{ width: '300px' }} onMouseOver={handleMouseEnterImage} onMouseOut={handleMouseLeaveImage}>
                    <CardMedia component="img" image={imageSrc} alt={name} />
                    <CardContent>
                        <Typography variant="h5" component="h2">
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
