import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import "./homepagestyle.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import logo from "../Images/fflogo.jpg"
import test1 from "../Images/ff14bg.jpg"
import test2 from "../Images/ffxivcommunitybg.jpg"
import test3 from "../Images/ffxivnewsbg.jpg"



export default function HomePage(){

window.onload = function(){

  loginLoad();
  getTopicsInfo(3);
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
          
          `<li className="listItem"><Link to={"${data.maintenance[i].url}"}><img id="listlogoimg" src={logo}>
          <b>${data.maintenance[i].title}</b></Link>
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

async function getStatusInfo(Length){
 listItem.innerHTML = ``
  try{
      const response = await fetch('http://localhost:8081/api/test')
      const data = await response.json();
      console.log(data.status);

  
      for(let i = 0; i<=Length; i++){
          listItem.innerHTML +=
          
          `<li class="listItem"><a href="${data.status[i].url}"><img id="listlogoimg" src="../Images/fflogo.jpg">
          <b>${data.status[i].title}</b></a><br/>
          Date: ${data.status[i].time}</br>
          </li>`   
      }
  }catch(error){
      console.error(error);
  }
}
  
async function loginLoad(){

  let pfp = await getCharacterImage();

  if(JSON.parse(localStorage.getItem("User")) == null){
      
      loginContainer.innerHTML +=
      `<div id="pfpContainer">
      <img src={logo} id="characterPortrait">
     </div>
 
      <div id="acclinkContainer">
       <Link to={"/login"} className="loginLink" >Login</Link>
       <Link to={"/signup"} className="signupLink">Sign Up!</Link>
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

    return(
      <>
      
    {/* <link rel="images" type="jpg" href="../Images/fflogo.jpg"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> */}

        
        <div>
     <Link to="/"><img id="logo" src={logo} alt="fflogo"/></Link>
        </div>

    <div className="topnav">
            <Link to={"/news"} className="navlinks">News</Link>
            <Link to={"/profile"} className="navlinks">Profile</Link>
            <Link to={"/items"} className="navlinks">Items</Link>
            <Link to={"/support"} className="navlinks" >Support</Link>
    </div>

<div id="main">

 <div id="leftSide">

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img id="firstslide" className="slide" src={test1}/>
          </div>
          <div className="carousel-item">
            <img id="secondslide" className="slide" src={test2}/>
          </div>
          <div className="carousel-item">
            <img id="thirdslide" className="slide"src={test3}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="infoBar">
        <a onClick={() =>{getMaintenanceInfo(0),getTopicsInfo(0),getStatusInfo(0)}} id="newlink" className="link">New</a>
        <a onClick={() =>{getMaintenanceInfo(2)}} id="maintenancelink" className="link">Maintenance</a>
        <a onClick={() =>{getTopicsInfo(2)}} id="topicslink" className="link">Topics</a>
        <a onClick={() =>{getStatusInfo(2)}} id="statuslink" className="link">Status</a>
      </div>

      <div className="info">
        <ol id="list">
            <li id="listItem" className="text-whitesmoke no-underline font-woodgod text-xs hover:text-[rgba(245,245,245,0.744)] hover:underline"></li>
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


</>
    );
}