import React from 'react'
import {Container, Navbar, Nav,  FormControl, Dropdown, Badge, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import {FaUser} from 'react-icons/fa'
import { CartState } from './context/Context';
import { AiFillDelete } from "react-icons/ai";
import { useAuth } from './context/AuthContext';
import '../App.css'




const Header = () => {
  const {currentUser, logout} = useAuth()
    const {state:{cart}, dispatch, filterDispatch} = CartState()
    const navigate = useNavigate()


const buttonHandler = () => {
  logout();
   navigate('/login')
}

  return (
      <Navbar bg="light" variant="light" style={{ height: 80 }}>
          <Container>
              <Navbar.Brand>
                  <Link to='/'>INDIA FURNITURE LIMITED</Link>
              </Navbar.Brand>
              <Navbar.Text className='search'>
                  <FormControl style={{width:500}} placeholder="search" onChange={(e) => {
                filterDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
               className='m-4'/>
           
              </Navbar.Text>
             
              {/*<Button className="m-2" variant="dark">Search</Button>*/}
              <Nav>
                  <Dropdown alignRight>
                  <Dropdown.Toggle variant="info">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
               <Dropdown.Menu style={{minWidth:370}}>
                   {cart.length>0?(<>
                    {cart.map((product) => (
                    <span className="cartitem" key={product._id}>
                      <img
                        src={product.image}
                        className="cartItemImg"
                        alt={product.name}
                      />
                      <div className="cartItemDetail">
                        <span>{product.name}</span>
                        <span>&#8377; {product.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "80%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                   </>):
                   ( <span style={{padding:10}}>Cart is Empty</span>)}
                
               </Dropdown.Menu>
                  </Dropdown>
              </Nav>
            <Nav className='m-auto'>
            {currentUser ? <button onClick={buttonHandler} className="btn btn-outline-primary mb-2">Sign Out</button> : <Link to='/login'><FaUser fontSize="20px"/>Sign In</Link>}  
                      </Nav>

              {/*<div class="dropdown m-3">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  {currentUser ? <button onClick={buttonHandler} className="btn btn-primary">Sign Out</button> : <Link to='/login'><FaUser fontSize="20px"/>Sign In</Link>}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li>{currentUser ? <Link className="dropdown-item" to="/update">update Profile</Link> : <></>}</li>
   
  </ul>
                      </div>*/}
           


              <Nav className='m-auto'>
              <Link to='/contact'><FaUser fontSize="20px"/>Enquiry</Link>
              </Nav>
          </Container>
      </Navbar>

  )
}

export default Header