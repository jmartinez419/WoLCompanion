let characterInfo = document.getElementById(`characterInfo`);
let test = document.getElementById(`wishlistButton`);
let characterImage = document.getElementById(`characterImageContainer`);
let wishlistButton = document.getElementById(`wishListButton`);
let characterId;


window.onload = function(){
    
    showCharacterStats();
    showCharacterPortrait();

}


//double check if this is the right way to do it, have a hunch that it would be done a different way
// async function setCharacterId(formData){
//     try {
//         const response = await fetch("http://localhost:8081/inputCharacterId", {
//             method: "PUT",
//             body: JSON.stringify(formData),
//             headers: {"Content-Type":"application/json"}
//         })
        
//     } catch (error) {
//         console.error(error);
//     }
// }

async function getCharacterInfo(){   
    try{
        const response = await fetch(`https://ffxivcollect.com/api/characters/${JSON.parse(localStorage.getItem("User")).characterId}`) //;id will be changed to inputvalue after test
        const data = await response.json()
        console.log(data);
        return data;
    }catch(error){
        console.log(" does not exist.")
    }
}

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

    console.log(characterImage);
    
        characterImage.innerHTML =
        `<img id = "characterImage" src="${data.portrait}"/>
        ` 
}

function loginLoad(){

    if(JSON.parse(localStorage.getItem("User")) == null){
        
        loginContainer.innerHTML +=
        `<div id="pfpContainer">
        <img src="../Images/fflogo.jpg" id="characterPortrait">
       </div>
   
        <div id="acclinkContainer" style="font-family: WoodGod;">
         <a href="../Login/Login.html" class="loginLink" >Login</a>
         <a href="../SignUp/SignUp.html" class="signupLink">Sign Up!</a>
        </div>`
   
    }else {loginContainer.innerHTML +=
    `<div id="pfpContainer">
    <img src="" id="characterPortrait">
   </div>

    <div id="acclinkContainer" style="font-family: WoodGod;">
     <a href="../Profile/Profile.html" class="loginLink" >${JSON.parse(localStorage.getItem("User")).user}</a>
     <a href="../SignUp/SignUp.html" class="signupLink">Sign Up!</a>
    </div>`}
}


// just make button for the form that lets you input a new character, we can just check if theyre logged in, same as home and then after that just update characterid with a form, same as register,
// function gettingCharacterId(){

//     if(JSON.parse(localStorage.getItem("User")).characterId == 0){
        
//         characterInfo.innerHTML +=
//         `<div id="InstructionContainer">
//         <h1>No Character Linked to profile</h1>
//         <br/>
//         <section><a href="https://na.finalfantasyxiv.com/lodestone/character/">Here</a> <p>is where you can search your character and find the Id of your character with an example below.</p></section
//         <img id = "idexample" src="../Images/characteridexample.png">
//         <section>
//         <form id="characteridform">
//                     <label style="margin-top: 20%;" type="characterid">Character Id:</label>
//                     <input type="number" id="characteridinput" maxlength="30" name="email" placeholder="7231112" required="Required">
//                     <input id="idInput" type="submit" value="characterid">
//         </form>
//         </section>
//         </div>`
   
//     }else {showCharacterStats();
//       showCharacterPortrait();
//    }
// }
