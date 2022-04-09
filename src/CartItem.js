import React from 'react'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);
    const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);

    return (
        <>
          <td className="hhh5">
            <img src={item.image.url} alt="" />
            <p>{item.name}</p>
          </td>
          <td><p>{item.line_total.formatted_with_symbol}$</p></td>
        
          <td><div >{item.quantity}</div></td>
          <td>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </td>
          <td>
            <p>
              <button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
            </p>
          </td>
        </>
    )
}

export default CartItem