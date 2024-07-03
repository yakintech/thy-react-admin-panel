import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity, removeItem } from '../../../../store/CartSlice'

function List() {
  //reduxta global state useSelector ile ulaşırız

  const cartState = useSelector((state: any) => state.cart)

  let dispatch = useDispatch()

  

  const remove = (id: number) => {
    dispatch(removeItem(id))
  }

  const empty = () => {
    dispatch(clearCart())
  }

  let totalPrice = 0

  cartState.items.forEach((item: any) => {
    totalPrice += item.unitPrice * item.quantity
  })

  return <>
    <h2>Total Price: {totalPrice.toFixed(2)}</h2>
    <ul>
      {
        cartState.items.map((item: any) => {
          return <>
            <li style={{margin:10}} key={item.id}>{item.name} - {item.unitPrice.toFixed(2)} * {item.quantity} = {(item.unitPrice * item.quantity).toFixed(2)}
              <button onClick={() => dispatch(increaseQuantity(item.id))} style={{ marginLeft: 10 }}>+</button>

              <button onClick={() => dispatch(decreaseQuantity(item.id))} style={{ marginLeft: 10 }}>-</button>

              <button onClick={() => remove(item.id)} style={{ marginLeft: 20 }}>Remove</button>

            </li>

          </>
        })
      }
    </ul>

    <hr />
    <button onClick={empty}>Empty Cart</button>

  </>
}

export default List