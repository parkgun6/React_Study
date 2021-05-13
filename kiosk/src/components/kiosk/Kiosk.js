import ExLayout from "./ExLayout";
import React, { useState } from 'react';
import ProductList from "./ProductList";
import Cart from "./Cart";
import Grid from '@material-ui/core/Grid';


const Kiosk = () => {

    const [orderItems, setOrderItems] = useState([]) 

    const products = [
        {pno:1, name:'연필', price:500},
        {pno:2, name:'샤프', price:1000},
        {pno:3, name:'볼펜', price:1200},
        {pno:4, name:'지우개', price:700},
        {pno:5, name:'필통', price:1500},
        {pno:6, name:'물감', price:2500}
    ]

    const addCart = (p) => {

        //filter는 조건에 맞는 것만 추려낸다. 리턴값은 배열로 나온다.
        const checkArr = orderItems.filter(ele => ele.product.pno == p.pno)
        if(checkArr.length > 0){
            checkArr[0].qty += 1 
        }else{
        //console.log(p)
        orderItems.push({product:p, qty:1})
        }
        setOrderItems(orderItems.slice(0))
        console.log(orderItems)
    }

    const changeQty = (pno,num) => {
        console.log(pno,num)
        const checkArr = orderItems.filter(ele => ele.product.pno == pno)
        checkArr[0].qty += num
        setOrderItems(orderItems.slice(0))
    }

    return (  
        <ExLayout>
            <Grid container>
                <Grid item xs={8}>
                <ProductList products={products} addCart={addCart}></ProductList>
                </Grid>
                <Grid item xs={4}>
                <Cart items={orderItems} changeQty={changeQty}></Cart>
                </Grid>
            </Grid>
        </ExLayout>
    );
}
 
export default Kiosk;
