import React, {useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginpagestyle.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import logo from "../Images/fflogo.jpg"

export default function LoginPage(){

    const formRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        const form = formRef.current;

        console.dir(form);

        const formData = {
            email: form.email.value,
            password: form.password.value,
        };

        
        try{
            await Login(formData);

            setTimeout(() => {
                navigate("/profile");
            }, 2000);
        } catch (error) {
            console.error('Failed to Login;', error)
        }
    };


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





    return (
        <>
        <div className="loginpagebody">
        
        <div>
     <Link to="/"><img id="logo" src={logo} alt="fflogo"/></Link>
        </div>

    <div id="logintopnav">
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
                        <label htmlFor="password">Password:</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Password" 
                            required 
                        />
                        
                        <input id="loginInput" type="submit" value="Login" />
                    </form>

                    <div id="profileOptions">
                        {/* <Link to="/ForgotPassword" className="loginOptions">Forgot Password</Link> */}
                        {/* <div id="line"></div> */}
                        <Link to="/SignUp" id="LoginPageOption" className="loginOptions">New User</Link>
                    </div>
                </div>
            </div>
        
    





        </div>
        </>
    );
}