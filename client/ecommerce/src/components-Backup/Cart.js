import { useCartContext } from './CartContext';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/Cart.css"

function Cart() {
    const { cartItems, removeFromCart } = useCartContext();
    var cpt = 0;
    const totolBill = () => {
        cartItems.map((item) => {
            cpt += parseFloat(item.price)
        })
        return cpt
    }

    return (
        <div className='carts'>
            {cartItems.map((item) => (
                <Grid container spacing={2} className='eachItem'>
                    <Grid item xs={4}>
                        <img src={item.images[0]} alt={item.name} style={{ maxWidth: 220 }} />
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
            <Grid container spacing={2} className='eachItem'>
                <Grid item xs={4}>
                    <Typography variant="h6" color="textSecondary">
                        Check out
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" color="textSecondary">
                        Your total
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h6" color="textSecondary">
                        {totolBill()}$
                    </Typography>
                </Grid>
            </Grid>

            <Button variant="contained" color="primary" style={{backgroundColor: 'black'}} className='checkOutBtn'>
                Buy
            </Button>
        </div>
    );
}
export default Cart
