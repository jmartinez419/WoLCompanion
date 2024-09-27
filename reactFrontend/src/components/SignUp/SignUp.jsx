import React, {useRef} from "react";
import { Link } from "react-router-dom";
import "./signup.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import logo from "../Images/fflogo.jpg"
import Login from "../Login/LoginPage"

export default function SignUp(){


    const formRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        const form = formRef.current;

        console.dir(form);

        const formData = {
            email: form.email.value,
            password: form.password.value,
            user: form.user.value,
            character_id: form.user.characterId
        };

        // Call your Login function here
        await sendForm(formData);

        setTimeout(() => {
            window.location.replace(
                <Login />
            );
        }, 2000);
    };

    async function sendForm(formData){

            try{
                const request = await fetch("http://localhost:8081/register", {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {"Content-Type":"application/json"}})
            }catch(error){
                console.error(error);
            }
        }
    



    
    return(
        <>
        <div className="signuppagebody">
        
        <div>
     <Link to="/"><img id="logo" src={logo} alt="fflogo"/></Link>
        </div>

    <div className="topnav">
            <Link to={"/news"} className="navlinks">News</Link>
            <Link to={"/profile"} className="navlinks">Profile</Link>
            <Link to={"/items"} className="navlinks">Items</Link>
            <Link to={"/support"} className="navlinks" >Support</Link>
    </div>

    
            <div id="loginFormContainer">
                <div id="formContainer">
                    <form id="contactForm" ref={formRef} onSubmit={handleSubmit}>
                        <label style={{ marginTop: '20%' }} htmlFor="emailInput">Email:</label>
                        <input 
                            type="email" 
                            id="emailInput" 
                            maxLength="30" 
                            name="email" 
                            placeholder="example@email.com" 
                            required 
                        />
                        <label htmlFor="CharacterId">Character ID</label>
                        <input
                        type="number"
                        id="characterIdInput"
                        maxLength="30"
                        name="characterId"
                        placeholder="723112"
                        required
                        />
                        <label htmlFor="user">User Name</label>
                        <input
                        type="text"
                        id="userNameInput"
                        maxLength="25"
                        name="user"
                        placeholder="Bambino"
                        required
                        />
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Password" 
                            required 
                        />
                        
                        <input id="loginInput" type="submit" value="Submit" />
                    </form>

                    <div id="profileOptions">
                        <Link to="/ForgotPassword" className="loginOptions">Forgot Password</Link>
                        <div id="line"></div>
                        <Link to="/SignUp" className="loginOptions">New User</Link>
                    </div>
                </div>
            </div>
        
    





        </div>
        </>
    )
}