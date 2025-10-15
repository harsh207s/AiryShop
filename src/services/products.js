// simple local product data for demo
export const products = [
  {
    id: 'p1',
    title: 'Classic White Sneakers',
    price: 2499,
    description: 'Comfortable and stylish sneakers for everyday wear.',
    image: 'https://images.unsplash.com/photo-1528701800489-4766c9d7c7a1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1'
  },
  {
    id: 'p2',
    title: 'Minimalist Watch',
    price: 4999,
    description: 'Sleek watch with leather strap.',
    image: 'https://images.unsplash.com/photo-1519741491313-399f0bdf0a2a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2'
  },
  {
    id: 'p3',
    title: 'Cozy Hoodie',
    price: 1999,
    description: 'Soft hoodie in multiple colors.',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3'
  },
  {
    id: 'p4',
    title: 'Designer Backpack',
    price: 3599,
    description: 'Durable backpack with multiple compartments.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4'
  }
]

export function getAll() {
  return Promise.resolve(products)
}

export function getById(id) {
  const p = products.find(pr => pr.id === id)
  return Promise.resolve(p)
}
