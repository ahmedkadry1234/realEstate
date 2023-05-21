import React, { useState } from "react";
import "./broker.css";
import Navbar1 from "../../../home/Navbar1";
import Footer from "../../../footer/footer";
import { useDispatch, useSelector } from "react-redux";
import { messege, selectoritem } from "../../../../redux/counterSlice";

const Broker = () => {
  const dispatch = useDispatch();
  const [iscall, setcall] = useState(true);

  const item = useSelector(selectoritem);

  return (
    <>
      <Navbar1 />
      {item.map((data) => {
        return (
          <div className="broker">
            <div className="container" key={data.id}>
              <div className="row">
                <div className="col-lg-7 col-sm-12">
                  <div className="top-card-broker">
                    <div className="img">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="info">
                      <div className="name-broker">{data.companyname}</div>
                      <div className="total-properties-broker">
                        <span>ACTIVE LISTINGS:</span> {data.forsale}
                      </div>
                    </div>
                  </div>
                  <div className="bottom-card-broker">
                    <h2>About {data.companyname}</h2>
                    <div className="head-office">
                      HEAD OFFICE:{data.headpffice}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="CONTACT-BROKER">
                    <h2>CONTACT THIS BROKER</h2>
                  </div>
                  <div
                    className="call-broker btn btn-danger"
                    onClick={() => {
                      setcall(!iscall);
                    }}
                  >
                    {iscall ? "Call broker" : data.number}
                  </div>
                  <div
                    className="email-broker btn btn-danger"
                    onClick={() => {
                      dispatch(messege());
                    }}
                  >
                    Email broker
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
    </>
  );
};

export default Broker;
