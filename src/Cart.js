import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CartItem from './CartItem';


const Cart = ( { cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart } ) => {

  const handleEmptyCart = () => onEmptyCart();
  
  const EmptyCart = () => (
    <div className="cartxy">
      <p>Your cart is currently empty.</p>
      <Link to="/Shop" >
        <button className="bttncarttt">Back to Shop</button></Link>
    </div>
  );


  const FilledCart = () => (
    <>
      {cart.line_items.map((lineItem) => (
        <tr key={lineItem.id} className="divcarttttt">
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
        </tr>
      ))
      }
    </>
  );



  return (
    <div>
      <div className="carttt">
        <h3 className="h3cart">Shopping Cart</h3>
        {cart.line_items.length?
        (<div className="fff">
          <div className="tblewidth">
            <table className="tbleee">
              <thead>
                <tr>
                  <th><p>PRODUCT DETAILS</p></th>
                  <th><p>UNIT PRICE	</p></th>
                  <th><p>QUANTITY</p></th>
                  <th><p>AMOUNT</p></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <FilledCart />
              </tbody>
            </table>

            <button onClick={handleEmptyCart}  className="bttncarttt mt-5">Empty Cart</button>
          </div>
        </div>):
        <EmptyCart />}
      </div>
      <Footer />
    </div>
  )
}

export default Cart


