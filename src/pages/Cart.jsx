import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CartPage() {
  const { state, dispatch } = useCart()
  const items = state.items

  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="mt-4"><Link to="/" className="text-blue-600 underline">Continue shopping</Link></p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4 border p-3 rounded">
            <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">₹{item.price}</p>
              <div className="mt-2 flex items-center gap-2">
                <button onClick={() => dispatch({ type: 'DECREMENT', payload: item.id })} className="border px-2">-</button>
                <span className="px-2">{item.qty}</span>
                <button onClick={() => dispatch({ type: 'INCREMENT', payload: item.id })} className="border px-2">+</button>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">₹{item.price * item.qty}</p>
              <button onClick={() => dispatch({ type: 'REMOVE', payload: item.id })} className="text-sm text-red-600 mt-2">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-lg">Subtotal: <span className="font-semibold">₹{total}</span></p>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Proceed to Checkout</button>
      </div>
    </div>
  )
}
