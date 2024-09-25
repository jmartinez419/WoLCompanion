let form = document.getElementById(`contactForm`)

 form.addEventListener(`submit`, (event) =>{
    event.preventDefault()
    console.dir(form);
    let formData = {
    email: form.email.value,
    password: form.password.value
    }
    Login(formData)
    setTimeout(function(){
    window.location.replace("http://localhost:5500/frontend/Src/Profile/Profile.html")
    }, 2000);    
 })

console.log(JSON.parse(localStorage.getItem("User")))

async function Login(formData){
  
        try{
            const request = await fetch("http://localhost:8081/Login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {"Content-Type":"application/json"}})
                const user = await request.json();
                console.log(user);
                localStorage.setItem("User", JSON.stringify(user));
                
        }catch(error){
            console.error(error);
        }
    
}