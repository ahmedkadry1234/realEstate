import React from "react";
import Navbar1 from "../../home/Navbar1";
import Footer from "../../footer/footer";
import "./ourclint.css";
import data from "../../../Json/outclint.json";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddProdectInItemPage } from "../../../redux/counterSlice";

const Ourclint = () => {
  const dispatch = useDispatch();

  const openbrokerbage = (data) => {
    dispatch(AddProdectInItemPage(data));
  };

  return (
    <>
      <Navbar1 />

      <div className="ourclint">
        <div className="secheader">
          <div className="overlay"></div>
          <div className="container searched">
            <div className="label">Find your agent to find a home</div>
            <input
              type="search"
              placeholder="Enter a laoction or  company name"
              className="form-control"
            />
          </div>
        </div>
        <div className="container contcommpany">
          <div className="company row">
            <div className="col-12 titel">
              <h2>Broker Directory</h2>
            </div>
            {data.map((ele) => {
              return (
                <div className="col-sm-12 col-lg-3">
                  <Link
                    to="/ourclint/broker"
                    onClick={() => {
                      openbrokerbage(ele);
                    }}
                  >
                    <div className="card" typeof={ele.id}>
                      <img
                        src={ele.img}
                        className="card-img-top"
                        alt={ele.companyname}
                      />
                      <div className="crad-body">
                        <div className="card-titel">{ele.companyname}</div>
                        <div className="card-footer">
                          <div className="forrent">
                            <b>{ele.forrint}</b> <br /> <span>For rent</span>
                          </div>
                          <div className="forsale">
                            <b>{ele.forsale}</b> <br /> <span>For sale</span>
                          </div>
                          <div className="commercail">
                            <b>{ele.commercail}</b> <br />{" "}
                            <span>commercail</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            <div className="viewallclint">
              <Link to="" className="btn btn-danger ">
                view all clint
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ourclint;
