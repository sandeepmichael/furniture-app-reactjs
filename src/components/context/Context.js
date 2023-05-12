import { createContext, useContext, useReducer } from "react";
import products from "../../products";
import { cartReducer, FilterReducer} from "./Reducers";

const Cart = createContext() // it creates an object 

const Context = ({children}) => {
  


   const [state, dispatch] = useReducer(cartReducer, {
    products,
    cart:[]  //state 
   })

    const [filterState, filterDispatch] = useReducer(FilterReducer, {
        InStock:false,
        searchQuery:""


    })


    
   return <Cart.Provider value={{state, dispatch, filterState, filterDispatch}}>{children}</Cart.Provider>
    }






export const CartState = () => {
    return useContext(Cart)
}

export default Context;
