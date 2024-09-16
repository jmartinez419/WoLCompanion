const newLink = document.getElementById(`newlink`);
const topicsLink = document.getElementById(`topicslink`);
const maintenanceLink = document.getElementById(`maintenancelink`);
const statusLink = document.getElementById(`statuslink`);
const updatesLink = document.getElementById(`updateslink`);
const listitems = document.getElementById(`list`)

newLink.addEventListener('click',(event) => {
    event.preventDefault()
    console.log("eventtrigger")
    getNewInfo();
});

async function getNewInfo(){
    
    try{
        const response = await fetch('http://localhost:8080/api/test')
        const data = await response.json();
        
        console.log(data)
        for(i = 0; i<=data.results.length; i++){
            listitems.innerHTML +=
            `<a href"${data.results[i].url}"><img id="listitemimg" src="${data.results[i].image}">
            <li class="listItem"> <b>${data.results[i].title}</b><br/>
            ${data.results[i].description}</br>
            ${data.results[i].time}
            </li></a>`
        }
    }catch(error){
        console.error(error);
    }

}