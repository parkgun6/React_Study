import { Button } from "@material-ui/core";

//구조분해할당
const Cart = ({items, changeQty}) => {

    let total = 0;
    const list = items.map(orderItem=> {

        total += orderItem.product.price * orderItem.qty

        return(
            <div key={orderItem.product.pno} style={{ backgroundColor: '#cfe8fc'}}>
                <h5>{orderItem.product.name}</h5>
                <h6>{orderItem.qty}</h6>
                <div>
                    <Button variant="contained" color="primary" onClick={() => changeQty(orderItem.product.pno,1)}>+</Button>
                    <Button variant="contained" color="secondary" onClick={() => changeQty(orderItem.product.pno,-1)}>-</Button>
                </div>
            </div>
        )
    })

    return (  
        <>
        <h3>Cart</h3>
        {list}
        <h3>TOTAL: {total}</h3>
        </>
    );
}
 
export default Cart;