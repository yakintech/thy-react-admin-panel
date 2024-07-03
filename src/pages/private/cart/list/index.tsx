import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../../../store/CartSlice'

function List() {
  //reduxta global state useSelector ile ulaşırız

  const cartState = useSelector((state: any) => state.cart)

  let dispatch = useDispatch()


  const remove = (id: number) => {
    dispatch(removeItem(id))
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
            <li key={item.id}>{item.name} - {item.unitPrice.toFixed(2)} * {item.quantity} = {(item.unitPrice * item.quantity).toFixed(2)}

              <button onClick={() => remove(item.id)} style={{ marginLeft: 20 }}>Remove</button>
            </li>

          </>
        })
      }
    </ul>

  </>
}

export default List