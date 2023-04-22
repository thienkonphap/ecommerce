import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/Product.css'
import ProducstItem from './ProductsItem';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://tummachines.com/wp-content/uploads/2023/04/Ao-Den-1.jpg',
    price: '$9.99', 
    imageHover: 'https://tummachines.com/wp-content/uploads/2023/03/10.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://tummachines.com/wp-content/uploads/2023/02/Artboard-18-1.jpg',
    price: '$19.99',
    imageHover: 'https://tummachines.com/wp-content/uploads/2023/02/Artboard-12.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://tummachines.com/wp-content/uploads/2023/01/Artboard-7-3.jpg',
    price: '$29.99',
    imageHover: 'https://tummachines.com/wp-content/uploads/2023/01/TEEDUCBA-be-2.jpg'
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'https://tummachines.com/wp-content/uploads/2022/12/marilyn-KISS-BROWN-1.jpg',
    price: '$39.99',
    imageHover: 'https://tummachines.com/wp-content/uploads/2022/12/marilyn-KISS-GREY-7.jpg'
  },
  {
    id: 5,
    name: 'Product 5',
    image: 'https://tummachines.com/wp-content/uploads/2021/04/slim-den-1.jpg',
    price: '$49.99',
    imageHover: 'https://tummachines.com/wp-content/uploads/2021/04/29.jpg'
  },
  {
    id: 6,
    name: 'Product 6',
    image: 'https://tummachines.com/wp-content/uploads/2023/03/Artboard-1-3.jpg',
    price: '$59.99',
    imageHover: 'https://tummachines.com/wp-content/uploads/2023/03/Artboard-5-2.jpg'
  },
  {
    id: 7,
    name: 'Product 7',
    image: 'https://tummachines.com/wp-content/uploads/2023/03/Artboard-1-7-1.jpg',
    price: '$59.99',
    imageHover: 'https://tummachines.com/wp-content/uploads/2023/03/Artboard-5-4-1.jpg'
  },
  {
    id: 6,
    name: 'Product 6',
    image: 'https://tummachines.com/wp-content/uploads/2022/12/PARACHUTE-PANT-BLACK-1-1.jpg',
    price: '$59.99',
    imageHover: 'https://tummachines.com/wp-content/uploads/2022/12/VICTORIA-JACKET-BLACK-4.jpg'
  },
  {
    id: 6,
    name: 'Product 6',
    image: 'https://tummachines.com/wp-content/uploads/2023/03/Artboard-1-3.jpg',
    price: '$59.99',
    imageHover: 'https://tummachines.com/wp-content/uploads/2022/12/PARACHUTE-PANT-BLACK-5.jpg'
  }
];
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginTop: 30,
  },
  media: {
    height: 140,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
    marginTop: 5,
  },
});


function Product() {
  const classes = useStyles()
  return (
    <div className='products'>
      <Typography variant="h4" align="center" gutterBottom>
        Our products
      </Typography>
      <Grid container spacing={2} justify="center" alignItems="center" style={{margin: "0 auto", maxWidth: "960px", gap: 15}}>
        {products.map((product) => (
          <ProducstItem
          image={product.image}
          name={product.name}
          price={product.price}
          imageHover={product.imageHover}

          />
        ))}
      </Grid>
    </div>
  );
}

export default Product;
