import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar1 from '../../home/Navbar1';
import { useDispatch, useSelector } from 'react-redux';
import { Contact, DeletAll, favcounter, mynotes } from '../../../redux/counterSlice';
import { sortby } from '../../../Json/Data';
import Select from 'react-select';
import photo from '../desert-landscape.jpg';

const Contacted = () => {


    const counterfav=useSelector(favcounter);
    const countercontact=useSelector(Contact);
    const countermynote=useSelector(mynotes);
    const dispatch=useDispatch();
    
    
      const delet=()=>{
        dispatch(DeletAll())
      }

  return (
    <div>
      <Navbar1 />
      <div className="container">
        <div className="row">
          <div className="col-12 accountcol">
            <div className="MyAccount">My Account</div>
            <div className="Category">
              <div className="delet btn" onClick={()=>{delet()}}>
              <i class="fa-solid fa-trash"></i>
                Delet all
              </div>
            </div>
            <div className="sortby">
                <label >Sort by:</label>
                <Select  options={sortby} placeholder="Featured" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 items">
            <NavLink to="/account" activeClassName="activelineaccunt" className="item">Saved properties({counterfav})</NavLink>
            <NavLink to="/Contacted" activeClassName="activelineaccunt" className="item">Contacted properties({countercontact})</NavLink>
            <NavLink to="/mynotes" activeClassName="activelineaccunt" className="item">my notes({countermynote})</NavLink>
          </div>
          <div className="col-lg-6 col-sm-12">

          <div className="col-lg-6 col-sm-12 empity">
  <div className="empty-img">
    <img src={photo} alt="" />
  </div>
  <div className="No-saved">
    <h3>No Saved Properties</h3>
    <p>Here you will find the properties you inquired about</p>
  </div>
  </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacted