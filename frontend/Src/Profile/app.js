let characterInfo = document.getElementById(`characterInfo`);
let test = document.getElementById(`wishlistButton`);
let characterImage = document.getElementById(`characterImageContainer`);
let wishlistButton = document.getElementById(`wishListButton`);

wishlistButton.addEventListener('click', (event) =>{
    event.preventDefault()
   
    showCharacter();

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

async function showCharacter(){
    let data = await getCharacterInfo()

    for(i = 0; i <= data.length; i++){
        characterImage.innerHTML +=
        `<img id = "characterImage" href="${data.portrait}>
        `
    }
}