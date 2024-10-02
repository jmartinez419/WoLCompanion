import React, {useRef , useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Support.css'; 
import logo from '../Images/fflogo.jpg'; 
import emailjs from '@emailjs/browser';

export default function SupportPage() {

    const[showPopup, setShowPopup] = useState(false);
    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_bngzddg', 'template_a25lh8o', form.current,{
        publicKey: 'ehxkHinQH0vSTHOWS'
    })
    .then(
        () => {
            console.log('Success!');
        },
        (error) => {
            console.log('Failed..', error.text);
        },
    );
  };





    return (
        <>
        <div className='supportbody'>
        
        <div>
     <Link to="/"><img id="logo" src={logo} alt="fflogo"/></Link>
        </div>

    <div id="topnav">
            <Link to={"/news"} className="navlinks">News</Link>
            <Link to={"/profile"} className="navlinks">Profile</Link>
            <Link to={"/items"} className="navlinks">Items</Link>
            <Link to={"/"} className="navlinks" >Home</Link>
    </div>

            <Container id="main">
                <Row>
                    <Col id="leftSide">
                        <div id="supportformContainer">
                            <Form id="contactForm" ref={form} onSubmit={sendEmail}>
                                <h2 id="contactHeader">Contact us!</h2>
                                <Form.Group controlId="emailInput" className='contactUserInput'>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="example@email.com"
                                        required
                                        className='InputField'
                                    />
                                </Form.Group>
                                <Form.Group controlId="nameInput" className='contactUserInput'>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="John"
                                        className='InputField'
                                    />
                                </Form.Group>
                                <Form.Group controlId="messageInput" className='contactUserInput'>
                                    <Form.Label>Message:</Form.Label>
                                    <Form.Control 
                                        as="textarea"
                                        name="message"
                                        rows={10}
                                        maxLength={500}
                                        placeholder="How can we help?"
                                        required
                                        className='MessageInputField'
                                        
                                    />
                                </Form.Group>
                                {showPopup && <p id='messageConfirm'>Message Sent!</p>}
                                <Button id="submitInput" type="submit" variant="primary" value="Send" onClick={handleButtonClick}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    );
};