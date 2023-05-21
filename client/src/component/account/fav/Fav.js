import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delet, messege, selectoraccont } from '../../../redux/counterSlice'
import './Fav.css'
import photo from '../desert-landscape.jpg';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";
const Fav = () => {
const [iscall,setcall]=useState(true);
    const accont=useSelector(selectoraccont)
 
    const dispatch=useDispatch()
    const remove=(item)=>{
        dispatch(delet(item))
    }

return (
    <>
{accont.length !==0? accont.map((item)=>{
    return(
      <div className="carditem  col-lg-12 col-sm-12" key={item.id}>
        <div className="row">

       
      <div className="photoitem col-lg-4 col-sm-12">
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={item.img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.img} />
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="col-lg-8 col-sm-12 detelsitem">
        <div>office space</div>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "black",
          }}
        >
          {item.price}
        </div>
        <div className="textover">{item.description}</div>
        <div className="textover"><i class="fa-solid fa-location-dot pad"></i>{item.location}</div>
        <div className="footerdetesitem">
          <div className="">
            <i class="fa-sharp fa-solid fa-bath"></i>{" "}
            {item.Bathrooms} Bathroom
          </div>
          <div className="">
            <i class="fa-sharp fa-solid fa-city"></i>{" "}
            {item.PropertySize} sqm
          </div>
        </div>
      </div>
      <div className="col-12 contactiem">
        <div className="socialmedia">
          <div className="btn call" onClick={()=>{setcall(!iscall)}}>
            <i
              class="fa-solid fa-phone pad"
            ></i>
           {iscall ? "Call" : item.number}
          </div>
          <div className="btn email" onClick={()=>{dispatch(messege())}}>
          <i class="fa-solid fa-envelope pad"></i>
          Email
          </div>
          <a className="btn whats" href='http://www.whatsapp.com' target='_black'>
          <i class="fa-brands fa-whatsapp pad"></i>
          WhatsApp
          </a>
          <div className="btn love">
          <i class="fa-sharp fa-solid fa-heart" onClick={()=>{remove(item)}}></i>
          </div>
        </div>
      </div>
      </div>
    </div>
    )
})
: 
<div className="col-lg-6 col-sm-12 empity">
<div className="empty-img">
  <img src={photo} alt="" />
</div>
<div className="No-saved">
  <h3>No Saved Properties</h3>
</div>
</div>
    }

    </>
  )
}

export default Fav
