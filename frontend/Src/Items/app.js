const searchButton = document.getElementById(`searchBtn`);
const searchInput = document.getElementById(`table_filter`);
const itemInfo = document.getElementById(`itemlist`)
const mountToggle = document.getElementById(`mounts`)
const minionToggle = document.getElementById(`minions`)
const achievementToggle = document.getElementById(`achievements`)
const hairstyleToggle = document.getElementById(`hairStyles`)
const emoteToggle = document.getElementById(`emotes`)
const orchestrionToggle = document.getElementById(`orchestrion`)




searchButton.addEventListener('click', (event) => {
    itemInfo.innerHTML = ``
  event.preventDefault()
  let category;
  if(mountToggle.checked == true){
     category = "mounts";
  }else if(minionToggle.checked == true){
    category = "minions";
  }else if(achievementToggle.checked == true){
    category = "achievements"
  }else if(hairstyleToggle.checked == true){
    category = "hairstyles"
  }else if(emoteToggle.checked == true){
    category = "emotes"
  }else if (orchestrionToggle.checked == true){
    category = "orchestrions"
  };

  const inputValue = searchInput.value;
  getItems(inputValue, category)
});

async function getItems(inputValue, category){
      try {
        const response = await fetch (`https://ffxivcollect.com/api/${category}?limit=50&name_en_start=${inputValue}`)
        const data = await response.json()
        console.log(data)
        for(i = 0; i <= data.results.length; i++){
            itemInfo.innerHTML +=
            `<li><img height = "115px" width = "115px" id = "mount_image" src="${data.results[i].image}">
            <b>${data.results[i].name}</b>:
            ${data.results[i].description} ${data.results[i].enhanced_description}
            <br><b>Seats:</b>${data.results[i].seats}</br>
            This mount came out in patch ${data.results[i].patch}.</br>
            Only <b>${data.results[i].owned}</b> of players have this mount currently.
            
            </li><br></br>`
            
        }
      }catch(error){
        console.log("Mount does not exist")
      }
     
}