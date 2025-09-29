import React from 'react'
const itemsDetail = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    name: "Laptop",
    price: "$999",
    descr: "High-performance laptops for work and play."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    name: "Smartphone",
    price: "$799",
    descr: "Latest smartphones with sleek design and powerful cameras."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1580910051074-7d3c1f4e6d0d",
    name: "Tablet",
    price: "$499",
    descr: "Lightweight tablets perfect for reading, study, and gaming."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f",
    name: "Smartwatch",
    price: "$199",
    descr: "Stylish smartwatch to track fitness and stay connected."
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1585386959984-a4155223f37f",
    name: "Headphones",
    price: "$149",
    descr: "Noise-cancelling headphones with premium sound quality."
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1611262588024-d12430b8d6d6",
    name: "Gaming Console",
    price: "$499",
    descr: "Next-gen gaming console with immersive graphics and gameplay."
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1606813907291-f29b3c7e5e55",
    name: "Camera",
    price: "$699",
    descr: "DSLR camera for professional photography and videography."
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1588776814546-62f6ac1d09f5",
    name: "Bluetooth Speaker",
    price: "$89",
    descr: "Portable speaker with deep bass and long battery life."
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    name: "Desktop PC",
    price: "$1299",
    descr: "Powerful desktop for gaming, editing, and productivity."
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1583224964823-0f5a8bbdf7e8",
    name: "Drone",
    price: "$899",
    descr: "Capture stunning aerial shots with a 4K camera drone."
  }
]

const Cards = () => {
  return (
    <div className='fex flex-center flex-row justify-center items-center'>
      {itemsDetail.map((items)=>{
        return(
            <div key={items.id} className='border border-amber-300 flex flex-row'>
                
                    <img src={items.img} alt={items.name}  className='w-[310px]'/>
                <div >
                    <p>{items.name}</p>
                    <h3>{items.price}</h3>
                    <p>{items.descr }</p>
                </div>
                
                

            </div>
        )
})}
    </div>
  )
}

export default Cards
