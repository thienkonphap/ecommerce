import { useCartContext } from './CartContext';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/Cart.css"
function Cart() {
    const { cartItems, removeFromCart } = useCartContext();

    return (
        <div className='carts'>
            {cartItems.map((item) => (
                <Grid container spacing={2} className='eachItem'>
                    <Grid item xs={4}>
                        <img src={item.images[0]} alt={item.name} style={{maxWidth: 220}} />
                    </Grid>
                    <Grid item xs={4}>
                        <div >
                            <Typography variant="h5">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Size: {item.size}
                            </Typography>
                            <Typography variant="h6">
                                {item.price * item.quantity}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <Typography variant="h6" color="textSecondary">
                                {item.price}$
                            </Typography>
                    </Grid>
                </Grid>
                
                
            ))}
            <Grid item xs={12}>
                    <Typography variant="h6" color="textSecondary">
                                128$
                            </Typography>
                    </Grid>
        </div>
    );
}
export default Cart
