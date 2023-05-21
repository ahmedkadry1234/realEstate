import React, { useState } from 'react'
import Navbar1 from '../../home/Navbar1'
import Footer from '../../footer/footer'
import { Link } from 'react-router-dom'
import ele from '../../../Json/Elemint'
// import ele from '../../../Json//ele.json'
import Select from 'react-select'
import { sortby } from '../../../Json/Data'
import { useDispatch } from 'react-redux'
import { AddProdectInItemPage, AdditemInfavpage, messege } from '../../../redux/counterSlice'

const Commercial = () => {
  const filterdata=ele.filter((ele)=> ele.TheOffer === "commercial")
  const [data, setdata] = useState(filterdata);

  const handelLowPrice = (e) => {
    if (e.value === 1) {
      const sort = [...filterdata].sort((a, b) => (a.price > b.price ? 1 : -1));
      setdata(sort);
    } else if (e.value === 2) {
      const sort = [...filterdata].sort((a, b) => (a.price < b.price ? 1 : -1));
      setdata(sort);
    } else if (e.value === 3) {
      const sort = [...filterdata].sort((a, b) => (a.date > b.date ? 1 : -1));
      setdata(sort);
    } else {
      setdata(data);
    }
  };
  const [iscall,setcall]=useState(true);

  const dispatch=useDispatch();
  const favicon=(item)=>{
dispatch(AdditemInfavpage(item))
  }
  const additem=(item)=>{
    dispatch(AddProdectInItemPage(item))
  }

  return (
    <>
    <Navbar1 />

    <div className="Commercial sidebage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="first-line">
                <Link to="/home">
                  <i class="fa-solid fa-house"></i>
                </Link>
                <span className="shap">  </span>
                <span className="text"> Properties for Commercial in Egypt</span>
              </div>
              <div className="scend-line">
                <h3>
                  <b>Properties for Commercial in Egypt</b>
                </h3>
              </div>
              <div className="third-line">
                <div className="result">
                  
                  <span>{filterdata.length}</span> results
                </div>
                <div className="sortby">
                  <label htmlFor="">Sort by:</label>
                  <Select options={sortby} placeholder="Featured" onChange={handelLowPrice} />
                </div>
              </div>
              <div className="buyitems">
              {data.map((ele) => {
                  return (
                    <div className="carditem row" key={ele.id}>
                      <div className="col-lg-4 col-sm-12 photoitem">
                        <img src={ele.img} alt="" />
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
                          {ele.price}
                        </div>
                        <div className="textover">{ele.description}</div>
                        <div className="textover"><i class="fa-solid fa-location-dot pad"></i>{ele.location}</div>
                        <div className="footerdetesitem">
                          <div className="">
                            <i class="fa-sharp fa-solid fa-bath"></i>{" "}
                            {ele.Bathrooms} Bathroom
                          </div>
                          <div className="">
                            <i class="fa-sharp fa-solid fa-city"></i>{" "}
                            {ele.PropertySize} sqm
                          </div>
                        </div>
                      </div>
                      <div className="col-12 contactiem">
                      <div className="timepost">Listed {ele.date.toDateString()} ago</div>
                        <div className="socialmedia">
                          <div className={iscall ?"btn call callclint displayblock" : "displaynone"} onClick={()=>{setcall(!iscall)}}>
                            <i
                              class="fa-solid fa-phone pad"
                            ></i>
                            Call
                            
                          </div>
                          <div className={iscall ?"displaynone" : " btn number displayblock" } >
                            <span className="">{ele.number}</span>
                          
                          <span className='back' onClick={()=>{setcall(!iscall)}}>back</span>

                          </div>
                          <div className="btn email"   onClick={() => {
                      dispatch(messege());
                    }}>
                          <i class="fa-solid fa-envelope pad"></i>
                          Email
                          </div>
                          <a className="btn whats" href="http://www.whatsapp.com" target="_blank">
                          <i class="fa-brands fa-whatsapp pad"></i>
                          WhatsApp
                          </a>
                          <div className="btn love fav" onClick={()=>{favicon(ele)}}>
                          <i class="fa-sharp fa-solid fa-heart"></i>
                          </div>
                         <Link to="/item" onClick={()=>{additem(ele)}} className="btn "><i class="fa-solid fa-images"></i></Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    <Footer />  
    </>
  )
}

export default Commercial
