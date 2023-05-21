import React from "react";
import "./Mainsection.css";
import data from "../../Json/ele.json";
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { AddProdectInItemPage } from "../../redux/counterSlice";

const Mainsection = () => {
  const dispatch=useDispatch();

  const additem=(item)=>{
    dispatch(AddProdectInItemPage(item))
  }



  return (
    <div className="container Mainsection">
      <div className="row">
        <div className="col-12 titel">
          <h4>Recommended properties in Egypt</h4>
        </div>
        {data.map((data) => {
          return (
            <Link to="/item" onClick={()=>{additem(data)}}  className="col-lg-4 col-sm-12 allview">
              <div className="card" style={{ width: "auto" }} key={data.id}>
                <img src={data.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text description">{data.description}</p>
                  <p className="typepart">
                    {data.type}
                    <span className="pric"> {data.price}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Mainsection;
