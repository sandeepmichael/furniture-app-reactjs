import React from 'react'
import { CartState } from './context/Context'
import Filters from './Filters'
import SingleProduct from './SingleProduct'
import './styles.css'

const Dashboard = () => {
    const {state : {products}, filterState:{InStock, sort, searchQuery}} = CartState()

    const transformproducts = () => {
      let sortedProducts = products;
      if(sort){
        sortedProducts = sortedProducts.sort((a,b) => sort === "lowToHigh" ?a.price  - b.price : b.price - a.price)
      }
      if (!InStock) {
        sortedProducts = sortedProducts.filter((product) => product.countInStock);
      }

      if (searchQuery) {
        sortedProducts = sortedProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery)
        );
      }

      return sortedProducts;
    }
  
  return (
    <div className='home'>
        <Filters />
        
      
        <div className='productContainer'>
            {transformproducts().map((product) => {
              return <SingleProduct product={product} key={product._id}/>
            })}

        </div>

    </div>
  )
}

export default Dashboard