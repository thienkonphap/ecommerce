import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import '../styles/ProductDetailPage.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import CommentSecion from './CommentSection'
import StarRating from './StarRating';
import { useCartContext } from './CartContext';



function ProductDetailPage() {
    const { addToCart } = useCartContext();
    const handleAddToCart = () => {
        addToCart(product);
      };
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#0971f1',
                darker: '#053e85',
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });
    const { productId } = useParams();
    const product = {
        name: 'Black Jacket',
        category: 'outwear',
        price: '19.99',
        images: [
            "https://tummachines.com/wp-content/uploads/2023/01/BOMBERDUCBA-9.jpg",
            "https://tummachines.com/wp-content/uploads/2023/01/BOMBERDUCBA-5.jpg",
            "https://tummachines.com/wp-content/uploads/2023/01/BOMBERDUCBA-3.jpg"]
    }
    const comments = [
        {
            'id': 12,
            'author': 'Thien NGUYEN',
            'avatarURL': 'https://www.ledgerinsights.com/wp-content/uploads/2021/12/adidas-nft-bored-ape.jpg',
            'text': 'Very nice jacket'
        },
        {
            'id': 12,
            'author': 'Konphap',
            'avatarURL': 'https://nftevening.com/wp-content/uploads/2022/05/Screenshot-2022-05-30-at-16.23.39.png',
            'text': 'Too expensive, need to discount'
        }
    ]
    const size = [
        {
            value: 'S',
            label: 'S',
        },
        {
            value: 'M',
            label: 'M',
        },
        {
            value: 'L',
            label: 'L',
        },
        {
            value: 'XL',
            label: 'XL',
        },
    ];
    // TODO: fetch product data using productId

    return (
        <div className='detailProduct'>
            <Grid container spacing={2} style={{ margin: "30px auto" }}>
                <Grid item xs={6} md={6} style={{ margin: "0 auto", maxWidth: "30%", gap: 15 }}>
                    <div className='imagesList'>
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`Product ${index}`} width="100%" />
                        ))}
                    </div>
                </Grid>
                <Grid item xs={6} md={6} className='productInfo'>
                    <h2 className='productName'>{product.name}</h2>
                    <StarRating point={3}/>
                    <p className='productPrice'>{product.price} $</p>
                    <TextField
                        id="standard-select-currency-native"
                        select
                        label="Size"
                        defaultValue="S"
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Please select size"
                        variant="standard"
                    >
                        {size.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <ThemeProvider theme={theme}>
                        <Button onClick={handleAddToCart} style={{ color: 'black' }} className='addToCard'>Add To Cart</Button>
                    </ThemeProvider>
                    <div className='info'>
                        <h4>Description</h4>

                        <p>Melted "Ice Cream" Sweater Vest---A comfy and personality sweater vest you don't have to think twice about! Part of the reason for eating ice cream in summer is to relieve the heat. But, how about in autumn and winter? That's the enjoyment! gently breezy and warm sunshine day, would you like the Vanilla-flavored ice cream or Matcha-flavored?
                            <h4>Shipping</h4>
                            <p>All Products Free Shipping!

                                We currently ship to over 50 countries!

                                🚚Your order will ship out as soon as it’s processed by our warehouse. Our order processing times are: 3 - 5 business days depending on product design and Item. Most of our items are made upon order to ensure the best quality for our customers!</p>
                        </p>
                    </div>
                    <Typography variant="h6" gutterBottom>
                        Comments
                    </Typography>
                    <div className='commentsSections'>
                        {
                        comments.map(comment => <CommentSecion comments={{ 'id': comment.id, 'author': comment.author, 'avatarUrl': comment.avatarURL, 'text': comment.text }} />)
                        }
                    </div>
                    
                </Grid>

            </Grid>

        </div>
    );
}

export default ProductDetailPage;
