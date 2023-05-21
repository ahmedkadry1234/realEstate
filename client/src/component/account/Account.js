import React from "react";
import "./Account.css";
import Navbar1 from "../home/Navbar1";
import { sortby } from "../../Json/Data";
import { NavLink } from "react-router-dom";
import Fav from "./fav/Fav";
import { useDispatch, useSelector } from "react-redux";
import {
  Contact,
  DeletAll,
  favcounter,
  mynotes,
} from "../../redux/counterSlice";
import Select from "react-select";

const Account = () => {
  const counterfav = useSelector(favcounter);
  const countercontact = useSelector(Contact);
  const countermynote = useSelector(mynotes);
  const dispatch = useDispatch();

  const delet = () => {
    dispatch(DeletAll());
  };
  return (
    <div>
      <Navbar1 />
      <div className="container">
        <div className="row">
          <div className="col-12 accountcol">
            <div className="MyAccount">My Account</div>
            <div className="Category">
              <div
                className="delet btn"
                onClick={() => {
                  delet();
                }}
              >
                <i class="fa-solid fa-trash"></i>
                Delet all
              </div>
            </div>
            <div className="sortby">
              <label htmlFor="">Sort by:</label>
              <Select options={sortby} placeholder="Featured" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 items">
            <NavLink
              to="/account"
              activeClassName="activelineaccunt"
              className="item"
            >
              Saved properties({counterfav})
            </NavLink>
            <NavLink
              to="/Contacted"
              activeClassName="activelineaccunt"
              className="item"
            >
              Contacted properties({countercontact})
            </NavLink>
            <NavLink
              to="/mynotes"
              activeClassName="activelineaccunt"
              className="item"
            >
              my notes({countermynote})
            </NavLink>
          </div>
          <div className="col-lg-8 col-sm-12">
            <Fav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
