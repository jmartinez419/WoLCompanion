let characterInfo = document.getElementById(`characterInfo`);
let test = document.getElementById(`wishlistButton`);
let characterImage = document.getElementById(`characterImageContainer`);
let wishlistButton = document.getElementById(`wishListButton`);

wishlistButton.addEventListener('click', (event) =>{
    event.preventDefault()
   
    showCharacterPortrait();
    showCharacterStats()
})

async function getCharacterInfo(){   
    try{
        const response = await fetch(`https://ffxivcollect.com/api/characters/7231112`) //;id will be changed to inputvalue after test
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