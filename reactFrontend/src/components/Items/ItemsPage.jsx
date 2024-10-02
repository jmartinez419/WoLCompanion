import { Link } from "react-router-dom";
import "../Items/Items.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import logo from "../Images/fflogo.jpg";
import { useState, useEffect, useRef } from "react";

export default function ItemsPage() {
    const [inputValue, setInputValue] = useState('');
    const [category, setCategory] = useState('mounts');
    const [items, setItems] = useState([]);

  const hasMounted = useRef(false);
  const [ pfpImage, setpfpImage] =  useState(null);

  useEffect(() => {
    
    if(!hasMounted.current){
      
      hasMounted.current = true;
      
      handleSearch();

      async function getCharacterImage(){
        try{
            const response = await fetch(`https://ffxivcollect.com/api/characters/${JSON.parse(localStorage.getItem("User")).characterId}`) //;id will be changed to inputvalue after test
            const data = await response.json()
            console.log(data);
            setpfpImage(data.avatar);
        }catch(error){
            console.log(" does not exist.")
        }
      } 

      getCharacterImage()
    }
    
  }, []);

  function loginLoad(){


    if(JSON.parse(localStorage.getItem("User")) == null){
  
        return ( <>
        <div id="pfpContainer">
        <img src={logo} id="characterPortrait"/>
       </div>
   
        <div id="acclinkContainer">
         <a href="/login" className="loginLink">Login</a>
         <a href="/signup" className="signupLink">Sign Up!</a>
        </div>
        </>)
    }else {
      
       return (
       <>
    <div id="pfpContainer">
    <img src={pfpImage} id="characterPortrait"/>
   </div>
  
    <div id="acclinkContainer">
     <a href="/profile" className="loginLink" >{JSON.parse(localStorage.getItem("User")).user}</a>
     <a href="/login" id="logout" className="signupLink" onClick={LogoutUser}>Logout</a>
    </div>
    </>
    )
   }
  
  }

  function LogoutUser(){
    localStorage.removeItem("User")
    Navigate("login");
  }

    const handleAddItem = async (item) => {
        console.log("Item received:", item); 
        const { item_id: itemid } = item; 

        // Get the user ID from local storage
        const user = JSON.parse(localStorage.getItem("User"));
        console.log("User from local storage:", user); 
        const uid = user ? user.uid : null; 

        // Check that category is set correctly
        if (!category) {
            console.error("Category is not selected.");
            return;
        }

        // Prepare the payload
        const payload = { itemid, category, uid };

        // Validate payload
        if (!itemid || !category || !uid) {
            console.error('Missing itemid, category, or uid');
            return; // Optionally, show an error message to the user
        }

        try {
            const response = await fetch('http://localhost:8081/addItem', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log('Item added successfully!');
                // Optionally, update state or show success notification
            } else {
                const errorData = await response.json();
                console.error('Failed to add item:', response.statusText, errorData);
                // Optionally, show an error message to the user
                alert(`Failed to add item: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            console.error('Error adding item:', error);
            // Optionally, show an error message to the user
            alert('An error occurred while adding the item. Please try again later.');
        }
    };

    //Get the information for the items the user is requesting
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

    //When search button is clicked, this function checks which category is selected and takes in the search bar aka userinput
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
                                        <img className="itemPicture" height="115px" width="115px" src={item.image || item.icon} alt={item.name} />
                                        <p id="name"><b>{item.name}</b>:</p>
                                        {item.description && <p id="description">{item.description} {item.enhanced_description}</p>}
                                        <p id="patch">This {category.slice(0, -1)} came out in patch {item.patch}.</p>
                                        <p id="percentOwned">Only <b>{item.owned}</b> of players have this {category.slice(0, -1)} currently.</p>
                                        <p style={{ marginLeft: '3%', textDecoration: 'underline', marginBottom: '-5%' }}><b>How to achieve:</b></p>
                                        {/* <button id="addButton" onClick={() => handleAddItem({ ...item })}>Add</button> */}
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
                        {loginLoad()}
                        </div>
                        <div className="jobguideContainer">
                            <a className="jobguidebuttonlink" href="https://na.finalfantasyxiv.com/jobguide/battle/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=na_jobguide" target="_blank">
                                <button id="jobguideButton">Job Guide</button>
                            </a>
                            <a className="craftguidebuttonlink" href="https://na.finalfantasyxiv.com/crafting_gathering_guide/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=na_cgguide" target="_blank">
                                <button id="craftguideButton">Craft Guide</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}