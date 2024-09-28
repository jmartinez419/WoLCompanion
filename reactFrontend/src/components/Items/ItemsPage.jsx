import { Link } from "react-router-dom";
import "../Items/Items.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from "../Images/fflogo.jpg";
import { useState } from "react";

export default function ItemsPage() {
    const [inputValue, setInputValue] = useState('');
    const [category, setCategory] = useState('');
    const [items, setItems] = useState([]);

    async function getStuff(inputValue, category) {
        try {
            const response = await fetch(`https://ffxivcollect.com/api/${category}?limit=50&name_en_start=${inputValue}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(category + " does not exist.");
            return null;
        }
    }

    async function handleSearch() {
        if (!category) {
            console.log("Please select a category.");
            return;
        }

        let data;
        switch (category) {
            case "achievements":
                data = await getAchievements(inputValue);
                break;
            case "hairstyles":
                data = await getHairStyles(inputValue);
                break;
            case "emotes":
                data = await getEmotes(inputValue);
                break;
            case "orchestrions":
                data = await getOrchestrion(inputValue);
                break;
            default:
                data = await getStuff(inputValue, category);
                break;
        }
        if (data && data.results) {
            setItems(data.results); // Update state with fetched items
        }
    }

    async function getAchievements(inputValue) {
        const data = await getStuff(inputValue, "achievements");
        return data;
    }

    async function getHairStyles(inputValue) {
        const data = await getStuff(inputValue, "hairstyles");
        return data;
    }

    async function getEmotes(inputValue) {
        const data = await getStuff(inputValue, "emotes");
        return data;
    }

    async function getOrchestrion(inputValue) {
        const data = await getStuff(inputValue, "orchestrions");
        return data;
    }

    async function loginLoad(){

      let pfp = await getCharacterImage();
    
      if(JSON.parse(localStorage.getItem("User")) == null){
          
          loginContainer.innerHTML +=
          `<div id="pfpContainer">
          <img src=${logo} id="characterPortrait">
         </div>
     
          <div id="acclinkContainer">
           <a href="/login" id="loginLink">Login</a>
           <a href="/signup" id="signupLink">Sign Up!</a>
          </div>`
      }else {
          loginContainer.innerHTML +=
      `<div id="pfpContainer">
      <img src="${pfp.avatar}" id="characterPortrait">
     </div>
    
      <div id="acclinkContainer" style="font-family: WoodGod;">
       <Link to={"/profile"} className="loginLink" >${JSON.parse(localStorage.getItem("User")).user}</a>
       <Link to={"/login"} id="logout" className="signupLink">Logout</a>
      </div>`
    }
    }
    
    async function getCharacterImage(){
      try{
          const response = await fetch(`https://ffxivcollect.com/api/characters/${JSON.parse(localStorage.getItem("User")).characterId}`) //;id will be changed to inputvalue after test
          const data = await response.json()
          console.log(data);
          return data;
      }catch(error){
          console.log(" does not exist.")
      }
    }

    window.onload = function(){
      loginLoad();
      

    }

    return (
        <>
            <div id="itemsbody">
                <div>
                    <Link to="/"><img id="logo" src={logo} alt="fflogo" /></Link>
                </div>

                <div className="topnav">
                    <Link to={"/news"} className="navlinks">News</Link>
                    <Link to={"/profile"} className="navlinks">Profile</Link>
                    <Link to={"/"} className="navlinks">Home</Link>
                    <Link to={"/support"} className="navlinks">Support</Link>
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
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            placeholder="Search..."
                                        />
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                                {category || "Category"}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item as="button" onClick={() => setCategory("mounts")}>Mounts</Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => setCategory("minions")}>Minions</Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => setCategory("achievements")}>Achievements</Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => setCategory("hairstyles")}>Hair Styles</Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => setCategory("orchestrions")}>Orchestrion</Dropdown.Item>
                                                <Dropdown.Item as="button" onClick={() => setCategory("emotes")}>Emotes</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button id="searchBtn" variant="secondary" className="btn-search" onClick={handleSearch}>
                                            <span className="glyphicon glyphicon-search">&nbsp;</span>
                                            <span className="label-icon">Search</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="itemContainer">
                            <ol id="itemlist">
                                {items.map((item, index) => (
                                    <li key={index} className="listItem">
                                        <img height="115px" width="115px" src={item.icon || item.image} alt={item.name} />
                                        <p id="name"><b>{item.name}</b>:</p>
                                        {item.description && <p id="description">{item.description} {item.enhanced_description}</p>}
                                        <p id="patch">This {category.slice(0, -1)} came out in patch {item.patch}.</p>
                                        <p id="percentOwned">Only <b>{item.owned}</b> of players have this {category.slice(0, -1)} currently.</p>
                                        <p style={{ marginLeft: '3%', textDecoration: 'underline', marginBottom: '-5%' }}><b>How to achieve:</b></p>
                                        <button id="addButton">Add</button>
                                        {item.sources && item.sources.map((source, j) => (
                                            <div key={j}>
                                                <p className="source">{source.type}</p>
                                                <p className="source">{source.text}</p>
                                            </div>
                                        ))}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div id="rightSide">

   <div id="loginContainer">


   </div>

  <div className="jobguideContainer" >

    <a  className="jobguidebuttonlink" href="https://na.finalfantasyxiv.com/jobguide/battle/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=na_jobguide" target="_blank"><button id="jobguideButton" >Job Guide</button></a>
    <a  className="craftguidebuttonlink" href="https://na.finalfantasyxiv.com/crafting_gathering_guide/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=na_cgguide" target="_blank"><button id="craftguideButton">Craft Guide</button></a>
  </div>

   </div>
                </div>
            </div>
        </>
    );
}
