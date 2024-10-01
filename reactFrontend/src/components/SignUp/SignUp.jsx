import React, {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import logo from "../Images/fflogo.jpg"

export default function SignUp(){


    const formRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = formRef.current;

        console.dir(form);

        const formData = {
            email: form.email.value,
            password: form.password.value,
            user: form.user.value,
            characterId: form.characterId.value
        };
        console.log(formData);
        

        try {
            await sendForm(formData);

            setTimeout(() => {
                navigate("/login"); 
            }, 2000);
        } catch (error) {
            console.error('Failed to submit:', error);
        }
        
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

    
            <div id="signupFormContainer">
                <div id="signupformContainer">
                    <form id="signupcontactForm" ref={formRef} onSubmit={handleSubmit}>
                        <label style={{ marginTop: '20%' }} htmlFor="emailInput">Email:</label>
                        <input 
                            type="email" 
                            id="emailInput" 
                            maxLength="30" 
                            name="email" 
                            placeholder="example@email.com" 
                            required 
                        />
                        <label htmlFor="characterId">Character ID</label>
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
                        <Link to="/login" className="loginOptions" id="signupLogin">Already Have an Account?</Link>
                    </div>
                </div>
            </div>
        
    





        </div>
        </>
    )
}