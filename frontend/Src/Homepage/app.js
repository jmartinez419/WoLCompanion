const newLink = document.getElementById(`newlink`);
const topicsLink = document.getElementById(`topicslink`);
const maintenanceLink = document.getElementById(`maintenancelink`);
const statusLink = document.getElementById(`statuslink`);
const updatesLink = document.getElementById(`updateslink`);
const listitems = document.getElementById(`list`);
const firstslide = document.getElementById(`firstslide`);
const loginContainer = document.getElementById(`loginContainer`);


window.onload = function(){
    
    loginLoad()
    getTopicsInfo(2);
    getCharacterImage()
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


async function loginLoad(){

    let pfp = await getCharacterImage();

    if(JSON.parse(localStorage.getItem("User")) == null){
        
        loginContainer.innerHTML +=
        `<div id="pfpContainer">
        <img src="../Images/fflogo.jpg" id="characterPortrait">
       </div>
   
        <div id="acclinkContainer" style="font-family: WoodGod;">
         <a href="../Login/Login.html" class="loginLink" >Login</a>
         <a href="../SignUp/SignUp.html" class="signupLink">Sign Up!</a>
        </div>`
   
    }else {
        loginContainer.innerHTML +=
    `<div id="pfpContainer">
    <img src="${pfp.avatar}" id="characterPortrait">
   </div>

    <div id="acclinkContainer" style="font-family: WoodGod;">
     <a href="../Profile/Profile.html" class="loginLink" >${JSON.parse(localStorage.getItem("User")).user}</a>
     <a href="../Login/Login.html" id="logout" class="signupLink">Logout</a>
    </div>`
}

}


newLink.addEventListener('click',(event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getTopicsInfo(0);
    getMaintenanceInfo(0);
    getStatusInfo(0);
    getUpdatesInfo(0);
});


topicsLink.addEventListener('click',(event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getTopicsInfo(2);
});

maintenanceLink.addEventListener('click', (event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getMaintenanceInfo(2);
});

statusLink.addEventListener('click',(event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getStatusInfo(2);
});


async function getFirstSlideimg(Length){
    
    try{
        const response = await fetch('http://localhost:8081/api/test')
        const data = await response.json();
        

        for(let i = 0; i<=Length; i++){
            firstslide.innerHTML +=
            `<img id="firstslide" class="slide" src="${data.topics[i].image}/>`
        }
    }catch(error){
        console.error(error);
    }

}

async function getTopicsInfo(Length){
    
    try{
        const response = await fetch('http://localhost:8081/api/test')
        const data = await response.json();
        

        for(let i = 0; i<=Length; i++){
            listitems.innerHTML +=
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

    try{
        const response = await fetch('http://localhost:8081/api/test')
        const data = await response.json();
        console.log(data.maintenance);

    
        for(let i = 0; i<=Length; i++){
            listitems.innerHTML +=
            
            `<li class="listItem"><a href="${data.maintenance[i].url}"><img id="listlogoimg" src="../Images/fflogo.jpg">
            <b>${data.maintenance[i].title}</b></a><br/>
            Date: ${data.maintenance[i].time}</br>
            Start: ${data.maintenance[i].start}</br>
            End: ${data.maintenance[i].end}</br>    
            </li>`   
        }
    }catch(error){
        console.error(error);
    }
}

async function getStatusInfo(Length){

    try{
        const response = await fetch('http://localhost:8081/api/test')
        const data = await response.json();
        console.log(data.status);

    
        for(let i = 0; i<=Length; i++){
            listitems.innerHTML +=
            
            `<li class="listItem"><a href="${data.status[i].url}"><img id="listlogoimg" src="../Images/fflogo.jpg">
            <b>${data.status[i].title}</b></a><br/>
            Date: ${data.status[i].time}</br>
            </li>`   
        }
    }catch(error){
        console.error(error);
    }
}

// async function getUpdatesInfo(Length){

//     try{
//         const response = await fetch('http://localhost:8080/api/test')
//         const data = await response.json();
//         console.log(data.updates);

    
//         for(let i = 0; i<=Length; i++){
//             listitems.innerHTML +=
            
//             `<li class="listItem"><a href="${data.updates[i].url}"><img id="listlogoimg" src="../Images/fflogo.jpg">
//             <b>${data.updates[i].title}</b></a><br/>
//             Date: ${data.updates[i].time}</br>
//             </li>`   
//         }
//     }catch(error){
//         console.error(error);
//     }
// }