import { Link } from "react-router-dom";
import './profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../Images/fflogo.jpg";
import { useEffect, useState, useRef } from "react";


export default function ProfilePage(){

const hasMounted = useRef(false);
  const [ pfpImage, setpfpImage] =  useState(null);

  useEffect(() => {
    
    if(!hasMounted.current){
        showCharacterPortrait();
        showCharacterStats();
        hasMounted.current = true;
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

  function LogoutUser(){
      localStorage.removeItem("User")
      Navigate("login");
    }
    

    async function getCharacterInfo() {
        try {
            const response = await fetch(`https://ffxivcollect.com/api/characters/${JSON.parse(localStorage.getItem("User")).characterId}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Character does not exist.");
            return null;
        }
    };

    async function showCharacterStats(){
        let data = await getCharacterInfo()
        console.log(data)
    
        characterInfo.innerHTML = 
        `<div> 
        <h1 id="name">${data.name}</h1>
        <div id="charactersheet">
        <section><b>Server:</b> ${data.server}</section>
        <br>
        <section><b>Data Center:</b> ${data.data_center}</section>
        <br>
        <section><b>Achievement Amount:</b> ${data.achievements.total}</section>
        <br>
        <section><b>Achievement Score:</b> ${data.achievements.ranked_points_total}</section>
        <br>
        <section><b>Mount Amount:</b> ${data.mounts.count}</section>
        <br>
        <section><b>Minion Amount:</b> ${data.minions.count}</section>
        <br>
        <section><b>Orchestrion Amount:</b> ${data.orchestrions.total}</section>
        <br>
        </div>
        </div>
        `
    }

    async function showCharacterPortrait(){
        let data = await getCharacterInfo()
    
        // Select the HTML element where you want to display the image
        let characterImageContainer = document.getElementById("characterImageContainer"); // Replace with your actual ID
    
        if (characterImageContainer) {
            characterImageContainer.innerHTML = 
                `<img id="characterImage" src="${data.portrait}"/>`; 
        } else {
            console.error("Could not find element with ID 'characterImageContainer'");
        }
    }

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
      
      

    return (
        
        <div className="profileBody">

        <div>
     <Link to="/"><img id="logo" src={logo} alt="fflogo"/></Link>
        </div>

    <div id="topnav">
            <Link to={"/news"} className="navlinks">News</Link>
            <Link to={"/"} className="navlinks">Home</Link>
            <Link to={"/items"} className="navlinks">Items</Link>
            <Link to={"/support"} className="navlinks" >Support</Link>
    </div>

    <div id="main">

    <div id="leftSide">

     <div id="profileContainer">

       <div id="characterInfoContainer">

        <div id="characterInfo">

            
        
        </div>
        <div id="characterImageContainer">
    
        </div>
      </div>
     </div>

    </div>

    <div id="rightSide">

   <div id="loginContainer">
    {loginLoad()}
   </div>

  <div className="jobguideContainer" >

    <a  className="jobguidebuttonlink" href="https://na.finalfantasyxiv.com/jobguide/battle/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=na_jobguide" target="_blank"><button id="jobguideButton" >Job Guide</button></a>
    <a  className="craftguidebuttonlink" href="https://na.finalfantasyxiv.com/crafting_gathering_guide/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=na_cgguide" target="_blank"><button id="craftguideButton">Craft Guide</button></a>
  </div>

   </div>
</div>

    

 </div>



       
        
    );
}