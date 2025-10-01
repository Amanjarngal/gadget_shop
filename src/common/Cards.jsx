import React from 'react'
import { Rating, RatingButton } from '@/components/ui/shadcn-io/rating';

const itemsDetail = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Laptop",
    price: "Rs. 999",
    rating: "2",
    descr: "Latest smartphones with sleek design and powerful cameras."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Smartphone",
    price: "Rs.799",
    rating: "3",
    descr: "Latest smartphones with sleek design and powerful cameras."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Tablet",
    price: "Rs. 499",
    rating: "5",
    descr: "Lightweight tablets perfect for reading, study, and gaming."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Smartwatch",
    price: "Rs. 199",
    rating: "4",
    descr: "Stylish smartwatch to track fitness and stay connected."
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Headphones",
    price: "Rs. 149",
    rating: "2",
    descr: "Noise-cancelling headphones with premium sound quality."
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Gaming Console",
    price: "Rs.499",
    rating: "5",
    descr: "Next-gen gaming console with immersive graphics and gameplay."
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Camera",
    price: "Rs. 699",
    rating: "4",
    descr: "DSLR camera for professional photography and videography."
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Bluetooth Speaker",
    price: "Rs. 89",
    rating: "5",
    descr: "Portable speaker with deep bass and long battery life."
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Desktop PC",
    price: "Rs. 1299",
    rating: "3",
    descr: "Powerful desktop for gaming, editing, and productivity."
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Drone",
    price: "Rs. 899",
    rating: "3",
    descr: "Capture stunning aerial shots with a 4K camera drone."
  }
]

const Cards = () => {
  return (
    <div className='border flex flex-col items-center p-3'>
      <h1 className=' font-bold mb-4 text-4xl'>Product</h1>
      <div className='grid grid-cols-3  gap-5  '>

        {itemsDetail.map((items) => {
          return (

            <div key={items.id} className='border  flex flex-col p-3 items-center gap-3 rounded-lg shadow-lg '>

              <img src={items.img} alt={items.name} className='w-full h-62' />
              <div className="p-4 flex flex-col justify-between">
                <div className='flex flex-row justify-between'>
                  <p className="text-lg font-semibold text-gray-800">{items.name}</p>
                  <h3 className="text-xl font-bold text-indigo-600 mt-1">{items.price}</h3>
                </div>
                <div className="flex flex-row items-center justify-center gap-3">
                  <Rating defaultValue={items.rating}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingButton className="text-yellow-500" key={index} />
                    ))}
                  </Rating> <span>( {items.rating})</span>
                  
                </div>
                <p className="text-sm text-gray-600 mt-2">{items.descr}</p>
              </div>

            </div>
          )
        })}
      </div>
    </div>

  )
}

export default Cards
