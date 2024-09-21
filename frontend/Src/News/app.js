const newLink = document.getElementById(`newlink`);
const topicsLink = document.getElementById(`topicslink`);
const maintenanceLink = document.getElementById(`maintenancelink`);
const statusLink = document.getElementById(`statuslink`);
const updatesLink = document.getElementById(`updateslink`);
const listitems = document.getElementById(`list`)



newLink.addEventListener('click',(event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getTopicsInfo(1);
    getMaintenanceInfo(1);
    getStatusInfo(1);
    getUpdatesInfo(1);
});


topicsLink.addEventListener('click',(event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getTopicsInfo(5);
});

maintenanceLink.addEventListener('click', (event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getMaintenanceInfo(5);
});

statusLink.addEventListener('click',(event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getStatusInfo(5);
});

updatesLink.addEventListener('click',(event) => {
    listitems.innerHTML = ``
    event.preventDefault()
    console.log("eventtrigger")
    getUpdatesInfo(5);
});

async function getTopicsInfo(Length){
    
    try{
        const response = await fetch('http://localhost:8080/api/test')
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
        const response = await fetch('http://localhost:8080/api/test')
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
        const response = await fetch('http://localhost:8080/api/test')
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

async function getUpdatesInfo(Length){

    try{
        const response = await fetch('http://localhost:8080/api/test')
        const data = await response.json();
        console.log(data.updates);

    
        for(let i = 0; i<=Length; i++){
            listitems.innerHTML +=
            
            `<li class="listItem">
            <a href="${data.updates[i].url}"><img id="listlogoimg" src="../Images/fflogo.jpg">
            <b>${data.updates[i].title}</b></a><br/>
            Date: ${data.updates[i].time}</br>
            </li>`   
        }
    }catch(error){
        console.error(error);
    }
}