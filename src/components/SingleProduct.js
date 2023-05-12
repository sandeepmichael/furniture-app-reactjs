import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { CartState } from './context/Context'

const SingleProduct = ({product}) => {
    const {state:{cart}, dispatch} = CartState();
    console.log(cart)
    
  return (
    <div className='products'>
       <Card>
           <Card.Img variant='top' src={product.image} alt={product.name}/>
           <Card.Body>
               <Card.Title>{product.name}</Card.Title>
               <Card.Subtitle style={{paddingBottom:10}}>
                   <span>&#8377;{product.price}</span>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.brand}</Card.Text>
               </Card.Subtitle>
               {cart.some((p) => p._id === product._id)?( <Button onClick={() => dispatch({
                   type:"REMOVE_FROM_CART",
                   payload:product
               })} variant='danger'>Remove From Cart</Button>):(
                <Button onClick={() => dispatch({
                    type:"ADD_TO_CART",
                    payload:product
                })} disabled={product.countInStock === 0}>{product.countInStock === 0 ? 'Out Of Stock' : 'Add To Cart'}</Button>)}
              
           </Card.Body>
       </Card>

    </div>
  )
}

export default SingleProduct