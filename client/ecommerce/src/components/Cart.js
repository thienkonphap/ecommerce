import { useCartContext } from './CartContext';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "../styles/Cart.css"
import axios, * as others from 'axios';


// Cookies.set('session', String(localStorage.getItem("userid")), { expires: 7 }); // Expires in 7 days

function buyItems(listProducts, userid) {
    listProducts.map(product => {
        // const session = Cookies.get('session');
        const payload = {
            product_id: product._id,
            user_id: userid,
            quantity: 1
        }
        const endpoint = 'http://localhost:4000/products';
        const sessionData = {
            token: userid,
            userId: userid,
        };

        // Create the request headers
        const headers = {
            'Content-Type': 'application/json',
            // Add your session data to the headers
            'Authorization': `${sessionData.token}`,
            'X-User-Id': sessionData.userId,
        };

        // Create the request body (if needed)
        const requestBody = {
            // Your request body data
        };

        // Send the API request
        console.log(JSON.stringify(payload))
        fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data);
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
        /* const userId = userid
         document.cookie = `userId=${userId}; path=/`; // Set the userId in the cookie
         axios.post("http://localhost:4000/products", payload, {
             headers: {
                 'Authorization': `Bearer ${userid}`
             }
         }).then(res => {
             console.log(res.data)
         }) */
    })

}
function Cart() {
    const { cartItems, removeFromCart } = useCartContext();
    var cpt = 0;
    console.log(cartItems)
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
                                Size:
                            </Typography>
                            <Typography variant="h6">
                                S
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

            <Button
                onClick={() => buyItems(cartItems, String(localStorage.getItem("userid")))}
                variant="contained"
                color="primary"
                style={{ backgroundColor: 'black' }}
                className='checkOutBtn'>
                Buy
            </Button>
        </div>
    );
}
export default Cart
