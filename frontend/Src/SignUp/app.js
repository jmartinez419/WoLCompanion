let form = document.getElementById(`contactForm`)

 form.addEventListener(`submit`, (event) =>{
    event.preventDefault()
    console.dir(form);
    let formData = {
    email: form.email.value,
    user: form.user.value,
    password: form.password.value
    }
    sendForm(formData)
    window.location.replace("http://localhost:5500/frontend/Src/Login/Login.html")    
 })

 async function sendForm(formData){


    if(`${form.password.value}` == `${form.confirmPassword.value}`){
        try{
            const request = await fetch("http://localhost:8081/register", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {"Content-Type":"application/json"}})
        }catch(error){
            console.error(error);
        }
    }
}
    

    
 



