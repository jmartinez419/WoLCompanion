import "./Newspage.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import logo from "../Images/fflogo.jpg"
import { Link } from "react-router-dom"
import { useRef, useEffect, useState } from "react";


export default function NewsPage(){


    const hasMounted = useRef(false);
  const [ pfpImage, setpfpImage] =  useState(null);

  useEffect(() => {
    
    if(!hasMounted.current){
      getTopicsInfo(3);
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





    async function getStatusInfo(Length){
        listItem.innerHTML = ``
         try{
             const response = await fetch('http://localhost:8081/api/test')
             const data = await response.json();
             console.log(data.status);
       
         
             for(let i = 0; i<=Length; i++){
                 listItem.innerHTML +=
                 
                 `<li className="listItem">
                 <a id="newsredirectlink" href="${data.status[i].url}">
                 <img id="listlogoimg" src=${logo}
                 <b>${data.status[i].title}</b>
                 </a>
                 <br/>
                 Date: ${data.status[i].time}</br>
                 </li>`   
             }
         }catch(error){
             console.error(error);
         }
       }

    async function getTopicsInfo(Length){
        listItem.innerHTML = ``
      
        try{
            const response = await fetch('http://localhost:8081/api/test')
            const data = await response.json();
            
      
            for(let i = 0; i<=Length; i++){
                listItem.innerHTML +=
                `<a href="${data.topics[i].url}"><img id="listitemimg" src="${data.topics[i].image}"></a>
                <li class="listItem"> <b>${data.topics[i].title}</b><br/>
                ${data.topics[i].description}</br>
                ${data.topics[i].time}
                </li>`   
            }
        }catch(error){
            console.error(error);
        }
      
      }

    async function getMaintenanceInfo(Length){
        listItem.innerHTML = ``
        try{
            const response = await fetch('http://localhost:8081/api/test')
            const data = await response.json();
            console.log(data.maintenance);
      
        
            for(let i = 0; i<=Length; i++){
                listItem.innerHTML +=
                
                `<li className="listItem">
                <a id="newsredirectlink" href="${data.maintenance[i].url}"><img id="listlogoimg" src=${logo}>
                <b>${data.maintenance[i].title}</b></a>
                <br/>
                Date: ${data.maintenance[i].time}</br>
                Start: ${data.maintenance[i].start}</br>
                End: ${data.maintenance[i].end}</br>    
                </li>`   
            }
        }catch(error){
            console.error(error);
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

      async function getUpdatesInfo(Length){
        listItem.innerHTML = ``

        try{
            const response = await fetch('http://localhost:8081/api/test')
            const data = await response.json();
            console.log(data.updates);
    
        
            for(let i = 0; i<=Length; i++){
                listItem.innerHTML +=
                
                `<li className="listItem">
                <a id="newsredirectlink" href="${data.updates[i].url}"><img id="listlogoimg" src=${logo}>
                <b>${data.updates[i].title}</b></a><br/>
                Date: ${data.updates[i].time}</br>
                </li>`   
            }
        }catch(error){
            console.error(error);
        }
    }

    

    return (
    <>

        <div className="newspagebody">

        <div>
          <Link to="/"><img id="logo" src={logo} alt="fflogo"/></Link>
        </div>

     <div className="topnav">
            <Link to={"/"} className="navlinks">Home</Link>
            <Link to={"/profile"} className="navlinks">Profile</Link>
            <Link to={"/items"} className="navlinks">Items</Link>
            <Link to={"/support"} className="navlinks" >Support</Link>
     </div>

    <div id="main">

       <div id="leftSide">

        <div className="newsinfoBar">
            <a onClick={() =>{getMaintenanceInfo(0),getTopicsInfo(0),getStatusInfo(0)}} id="newlink" className="links">New</a>
            <a onClick={() =>{getTopicsInfo(3)}} id="topicslink" className="links">Topics</a>
            <a onClick={() =>{getMaintenanceInfo(3)}} id="maintenancelink" className="links">Maintenance</a>
            <a onClick={() =>{getStatusInfo(3)}} id="statuslink" className="links">Status</a>
            <a onClick={() =>{getUpdatesInfo(5)}} id="updateslink" className="links">Updates</a>
          </div>
    
          <div className="info">
            <ol id="list">
               <li id="listItem" className="text-whitesmoke no-underline font-woodgod text-xs hover:text-[rgba(245,245,245,0.744)] hover:underline"></li>
            </ol>
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
    </>
    );
}