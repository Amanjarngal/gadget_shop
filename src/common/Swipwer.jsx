import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';




// import required modules
import { EffectCards } from 'swiper/modules';
const imagesTxt = [
    {
        id: 1,
        img: "https://5.imimg.com/data5/SELLER/Default/2023/8/337686978/TA/CN/WK/14357089/mdr-ex150ap-sony-microphone-earbuds-500x500.jpg",
        text: "Headphones",
        descr: "Experience superior sound quality with our latest headphones, designed for comfort and durability."
    },
    {
        id: 2,  
        img: "https://geeklane.in/cdn/shop/files/2_4a6527d0-e3cc-42fb-b9ba-45e2734118e9.png?v=1733156118&width=1000",
        text: " Battery",
        descr: "Keep your devices powered up with our high-capacity batteries, ensuring long-lasting performance on the go."
    },
    {
        id: 3,
        img: "https://geeklane.in/cdn/shop/files/4_c564b82a-b57f-4d2c-86ee-846b976d2578.webp?v=1733261098&width=1000",
        text: "Power Banks",
        descr: "Stay charged wherever you go with our reliable and portable power banks, perfect for travel and outdoor adventures."
    },
    {
        id: 4,
        img: "https://images.news18.com/webstories/uploads/2024/10/Untitled-design-23-2024-10-f3aa3dd5036edbbebde3cdf0e48004f0.jpg",
        text: "Radio",
        descr: "Stay connected with our range of radios, offering clear sound quality and a variety of features for your listening pleasure."
    },
    {
        id: 5,
        img: "https://spy.com/wp-content/uploads/2022/03/Samsung-Freestyle-Review-15-of-15.jpg",
        text: "Projectors",
        descr: "Experience the ultimate in home entertainment with our state-of-the-art projectors, designed for stunning visuals and immersive sound."
    },
    {
        id: 6,
        img: "https://media.cnn.com/api/v1/images/stellar/prod/230611180857-macbook-air-15-review-cnnu-1.jpg?c=16x9&q=h_720,w_1280,c_fill",
        text: "Laptops",
        descr: "Discover our latest laptops, combining powerful performance with sleek design for work and play."
    },
    {
        id: 7,
        img: "https://static-assets-prod.fnp.com/images/pr/m/v300/boat-airdopes-148-true-wireless-earbuds-black.jpg",
        text: "Earbuds",
        descr: "Experience superior sound quality with our latest earbuds, designed for comfort and durability."
    },
    {
        id: 8,
        img: "https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_640.jpg",           
        text: "Smartwatches", 
        descr: "Stay connected on the go with our range of smartwatches, offering fitness tracking, notifications, and more."
    },
    ]   

export default function Swipwer() {
    const [currIndex, setCurrIndex] = useState(0);
    return (
        <>
        <div className='flex flex-row  justify-around m-10'>
            <div>
                <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                onSlideChange={(swiper) => setCurrIndex(swiper.activeIndex)}
                className="mySwiper"
            >
                {imagesTxt.map((item)=>(
                    <SwiperSlide key={item.id}>
                        
                            <img src={item.img} alt={item.text} className='object-cover h-full w-full' />
                            
                       
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
            <div className='flex flex-col items-center justify-center max-w-lg text-xl'> 
                <h1 className='text-5xl  font-bold text-yellow-500 mt-6 mb-4 text-center'>{imagesTxt[currIndex].text}</h1>
                <p className='text-black text-center mb-8 text-xl'>{imagesTxt[currIndex].descr}</p>

            </div>
            
        </div>
            
        </>
    );
}
