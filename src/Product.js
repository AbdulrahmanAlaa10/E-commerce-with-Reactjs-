import React from 'react'
import { RiShoppingBasket2Fill } from "react-icons/ri";

const Product = ({product , onAddToCart}) => {
  return (
    <div className='productitemm'>

        <img src={product.image.url} alt="" className='img1item'/>
        <div className="productitemicon d-flex align-items-center justify-content-between">
        <div>
          <p>
            {product.name}
          </p>
          <h3>${product.price.formatted}</h3>
        </div>
        <button onClick={() => onAddToCart(product.id, 1)} ><RiShoppingBasket2Fill /></button>
        </div>


    </div>
  )
}

export default Product