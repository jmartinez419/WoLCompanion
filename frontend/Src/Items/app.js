const searchButton = document.getElementById(`searchBtn`);
const searchInput = document.getElementById(`table_filter`);
const itemlist = document.getElementById(`itemlist`)
const mountToggle = document.getElementById(`mounts`)
const minionToggle = document.getElementById(`minions`)
const achievementToggle = document.getElementById(`achievements`)
const hairstyleToggle = document.getElementById(`hairStyles`)
const emoteToggle = document.getElementById(`emotes`)
const orchestrionToggle = document.getElementById(`orchestrion`)




searchButton.addEventListener('click', (event) => {
  itemlist.innerHTML = ``
  event.preventDefault()
  let category;
  const inputValue = searchInput.value;

  if(mountToggle.checked == true){
     category = "mounts";
     getMounts(inputValue, category)
  }else if(minionToggle.checked == true){
    category = "minions";
    getMinions(inputValue, category)
  }else if(achievementToggle.checked == true){
    category = "achievements"
    getAchievements(inputValue,category)
  }else if(hairstyleToggle.checked == true){
    category = "hairstyles"
    getHairStyles(inputValue,category)
  }else if(emoteToggle.checked == true){
    category = "emotes"
    getEmotes(inputValue,category)
  }else if (orchestrionToggle.checked == true){
    category = "orchestrions"
    getOrchestrion(inputValue,category)
  };
});

async function getStuff(inputValue, category){   
    try{
        const response = await fetch(`https://ffxivcollect.com/api/${category}?limit=50&name_en_start=${inputValue}`)
        const data = await response.json()
        console.log(data);
        return data;
    }catch(error){
        console.log(category + " does not exist.")
    }
}

async function getMounts(inputValue, category){
     let data = await getStuff(inputValue, category)

     for(i = 0; i <= data.results.length; i++){
      itemlist.innerHTML +=
      `<li id="listItem${i}" class="listItem">
      <img height = "115px" width = "115px" id = "mount_image" src="${data.results[i].image}">
      <p id="name">
      <b>${data.results[i].name}</b>:
      </p>
      <br/>
      <p id="description">
      ${data.results[i].description} ${data.results[i].enhanced_description}
      </p>
      <br/>
      <p id ="patch">
      This mount came out in patch ${data.results[i].patch}.
      </p>
      </br>
      <p id="percentOwned">
      Only <b>${data.results[i].owned}</b> of players have this mount currently.
      <p/>
      </br>
      <p style="margin-left: 3%; text-decoration: underline; margin-bottom: -5%">
      <b>How to achieve:</b>
      </p>
      <button id="addButton">
      Add
      </button>
      </li>`
      const listAppend = document.getElementById(`listItem${i}`)
      for(let j = 0; j<data.results[i].sources.length; j++){
       const p = document.createElement("p")
       const p2 = document.createElement("p")
       p.setAttribute("class","source")
       p2.setAttribute("class","source")
       p.innerHTML = data.results[i].sources[j].type
       p2.innerHTML = data.results[i].sources[j].text
       listAppend.append(p,p2)
      }           
  }
}

async function getMinions(inputValue, category){
    let data = await getStuff(inputValue, category)
    

       for(i = 0; i <= data.results.length; i++){
           itemlist.innerHTML +=
           `<li id="listItem${i}" class="listItem">
           <img height = "115px" width = "115px" id = "minion_image" src="${data.results[i].image}">
           <p id="name">
           <b>${data.results[i].name}</b>:
           </p>
           <br/>
           <p id="description">
           ${data.results[i].description} ${data.results[i].enhanced_description}
           </p>
           <br/>
           <p id ="patch">
           This minion came out in patch ${data.results[i].patch}.
           </p>
           </br>
           <p id="percentOwned">
           Only <b>${data.results[i].owned}</b> of players have this minion currently.
           <p/>
           </br>
           <p style="margin-left: 3%; text-decoration: underline; margin-bottom: -5%">
           <b>How to achieve:</b>
           </p>
           <button id="addButton">
           Add
           </button>
           </li>`
           const listAppend = document.getElementById(`listItem${i}`)
           for(let j = 0; j<data.results[i].sources.length; j++){
            const p = document.createElement("p")
            const p2 = document.createElement("p")
            p.setAttribute("class","source")
            p2.setAttribute("class","source")
            p.innerHTML = data.results[i].sources[j].type
            p2.innerHTML = data.results[i].sources[j].text
            listAppend.append(p,p2)
           }           
       }
}

async function getAchievements(inputValue, category){
  let data = await getStuff(inputValue, category)

  for(i = 0; i <= data.results.length; i++){
   itemlist.innerHTML +=
   `<li id="listItem${i}" class="listItem">
   <img height = "115px" width = "115px" id = "achievement_image" src="${data.results[i].icon}">
   <p id="name">
   <b>${data.results[i].name}</b>:
   </p>
   <br/>
   <p id="description">
   <b>How to achieve:</b>
   ${data.results[i].description}
   </p>
   <br/>
   <p id ="patch">
   This Achievement came out in patch ${data.results[i].patch}.
   </p>
   </br>
   <p id="percentOwned">
   Only <b>${data.results[i].owned}</b> of players have this Achievement currently.
   <p/>
   </br>
   <button id="addButton">
   Add
   </button>
   </li>`

  //  const listAppend = document.getElementById(`listItem${i}`)
  //  for(let j = 0; j<data.results[i].sources.length; j++){
  //   const p = document.createElement("p")
  //   const p2 = document.createElement("p")
  //   p.setAttribute("class","source")
  //   p2.setAttribute("class","source")
  //   p.innerHTML = data.results[i].sources[j].type
  //   p2.innerHTML = data.results[i].sources[j].text
  //   listAppend.append(p,p2)
  //  }           
}
}

async function getHairStyles(inputValue, category){
  let data = await getStuff(inputValue, category)
  

     for(i = 0; i <= data.results.length; i++){
         itemlist.innerHTML +=
         `<li id="listItem${i}" class="listItem">
         <img height = "115px" width = "115px" id = "minion_image" src="${data.results[i].icon}">
         <p id="name">
         <b>${data.results[i].name}</b>:
         </p>
         <br/>
         <p id="description">
         ${data.results[i].description} ${data.results[i].enhanced_description}
         </p>
         <br/>
         <p id ="patch">
         This Hair Style came out in patch ${data.results[i].patch}.
         </p>
         </br>
         <p id="percentOwned">
         Only <b>${data.results[i].owned}</b> of players have this Hair Style currently.
         <p/>
         </br>
         <p style="margin-left: 3%; text-decoration: underline; margin-bottom: -5%">
         <b>How to achieve:</b>
         </p>
         <button id="addButton">
         Add
         </button>
         </li>`
         const listAppend = document.getElementById(`listItem${i}`)
         for(let j = 0; j<data.results[i].sources.length; j++){
          const p = document.createElement("p")
          const p2 = document.createElement("p")
          p.setAttribute("class","source")
          p2.setAttribute("class","source")
          p.innerHTML = data.results[i].sources[j].type
          p2.innerHTML = data.results[i].sources[j].text
          listAppend.append(p,p2)
         }           
     }
}

async function getEmotes(inputValue, category){
  let data = await getStuff(inputValue, category)
  

     for(i = 0; i <= data.results.length; i++){
         itemlist.innerHTML +=
         `<li id="listItem${i}" class="listItem">
         <img height = "115px" width = "115px" id = "minion_image" src="${data.results[i].icon}">
         <p id="name">
         <b>${data.results[i].name}</b>:
         </p>
         <br/>
         <p id ="patch">
         This emote came out in patch ${data.results[i].patch}.
         </p>
         </br>
         <p id="percentOwned">
         Only <b>${data.results[i].owned}</b> of players have this emote currently.
         <p/>
         </br>
         <p style="margin-left: 3%; text-decoration: underline; margin-bottom: -5%">
         <b>How to achieve:</b>
         </p>
         <button id="addButton">
         Add
         </button>
         </li>`
         const listAppend = document.getElementById(`listItem${i}`)
         for(let j = 0; j<data.results[i].sources.length; j++){
          const p = document.createElement("p")
          const p2 = document.createElement("p")
          p.setAttribute("class","source")
          p2.setAttribute("class","source")
          p.innerHTML = data.results[i].sources[j].type
          p2.innerHTML = data.results[i].sources[j].text
          listAppend.append(p,p2)
         }           
     }
}

async function getOrchestrion(inputValue, category){
  let data = await getStuff(inputValue, category)
  

     for(i = 0; i <= data.results.length; i++){
         itemlist.innerHTML +=
         `<li id="listItem${i}" class="listItem">
         <img height = "115px" width = "115px" id = "minion_image" src="${data.results[i].icon}">
         <p id="name">
         <b>How to achieve:</b>
         <b>${data.results[i].name}</b>:
         </p>
         <br/>
         <p id="description">
         ${data.results[i].description} ${data.results[i].enhanced_description}
         </p>
         <br/>
         <p id ="patch">
         This Orchestrion came out in patch ${data.results[i].patch}.
         </p>
         </br>
         <p id="percentOwned">
         Only <b>${data.results[i].owned}</b> of players have this Orchestrion currently.
         <p/>
         </br>
         <button id="addButton">
         Add
         </button>
         </li>`
                 
     }
}