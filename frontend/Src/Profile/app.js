let characterInfo = document.getElementById(`CharacterStats`)
let test = document.getElementById(`wishlistButton`)
let characterImage = document.getElementById(`characterImageContainer`)


async function getCharacterInfo(inputValue, category){   
    try{
        const response = await fetch(`https://ffxivcollect.com/api/characters/7231112`) //;id will be changed to inputvalue after test
        const data = await response.json()
        console.log(data);
        return data;
    }catch(error){
        console.log(category + " does not exist.")
    }
}

async function showCharacter(inputVALUE, category){
    let data = await getCharacterInfo(inputValue, category)

    for(let i = 0; i <= data.results.length; i++){
        
        characterInfo.innerHTML += 
        `<li id="listItem${i} class="listItem">
        `
    }
}