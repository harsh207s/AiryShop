import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const initialState = {
  items: [] // { id, title, price, qty, image }
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      {
        const existing = state.items.find(i => i.id === action.payload.id)
        if (existing) {
          return {
            ...state,
            items: state.items.map(i =>
              i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
            )
          }
        }
        return {
          ...state,
          items: [...state.items, { ...action.payload, qty: 1 }]
        }
      }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.payload) }
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map(i => i.id === action.payload ? { ...i, qty: i.qty + 1 } : i)
      }
    case 'DECREMENT':
      return {
        ...state,
        items: state.items.map(i => i.id === action.payload ? { ...i, qty: Math.max(1, i.qty - 1) } : i)
      }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
