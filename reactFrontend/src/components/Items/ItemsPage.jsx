import { Link } from "react-router-dom";
import "../Items/Items.css"

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap';

import logo from "../Images/fflogo.jpg"

export default function ItemsPage(){


    
    return (
        <>
        <div id="itemsbody">

        <div>
     <Link to="/"><img id="logo" src={logo} alt="fflogo"/></Link>
        </div>

    <div className="topnav">
            <Link to={"/news"} className="navlinks">News</Link>
            <Link to={"/profile"} className="navlinks">Profile</Link>
            <Link to={"/"} className="navlinks">Home</Link>
            <Link to={"/support"} className="navlinks" >Support</Link>
    </div>

      <div id="main">

      <div id="leftSide">

      <div className="container" style={{ marginTop: '10%', marginLeft: '35%', width: '70%', fontFamily: 'WoodGod' }}>
      <div className="row searchFilter">
        <div className="col-sm-12">
          <div className="input-group">
            <input
              id="table_filter"
              type="text"
              className="form-control"
              aria-label="Text input with segmented button dropdown"
            />
                <div className="dropdown">
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="label-icon">Category</span>
                <span className="caret">&nbsp;</span>
              </button>
              </div>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ width: '190px' }}>
                <ul className="category_filters" style={{ listStyle: 'none' }}>
                  <li>
                    <input type="radio" name="radios" id="mounts" value="mounts" />
                    <label className="category-label" htmlFor="mounts">Mounts</label>
                  </li>
                  <li>
                    <input type="radio" name="radios" id="minions" value="minions" />
                    <label className="category-label" htmlFor="minions">Minions</label>
                  </li>
                  <li>
                    <input type="radio" name="radios" id="achievements" value="achievements" />
                    <label className="category-label" htmlFor="achievements">Achievements</label>
                  </li>
                  <li>
                    <input type="radio" name="radios" id="hairStyles" value="hairStyles" />
                    <label className="category-label" htmlFor="hairStyles">Hair Styles</label>
                  </li>
                  <li>
                    <input type="radio" name="radios" id="orchestrion" value="orchestrion" />
                    <label className="category-label" htmlFor="orchestrion">Orchestrion</label>
                  </li>
                  <li>
                    <input type="radio" name="radios" id="emotes" value="emotes" />
                    <label className="category-label" htmlFor="emotes">Emotes</label>
                  </li>
                </ul>
              </div>
              <button id="searchBtn" type="button" className="btn btn-secondary btn-search">
                <span className="glyphicon glyphicon-search">&nbsp;</span>
                <span className="label-icon">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
        
              <div id="itemContainer">
                <ol id="itemlist">

                </ol>
              </div>

        </div>

      
      </div>
            
        

        </div>
        </>
    );
}