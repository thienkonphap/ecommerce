import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/ProductsItem.css'


function ProducstItem({ image, name, price, imageHover }) {
const [hovered, setHovered] = useState(false);
  return (
    <div className='products'>
      <Typography variant="h4" align="center" gutterBottom>
        Our products
      </Typography>
      <Grid container spacing={2} justify="center" alignItems="center" style={{margin: "0 auto", maxWidth: "960px"}}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} style={{ width: '100%' }}>
            <Card style={{width : '300px'}}>
              <CardMedia component="img" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  {product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProducstItem;
