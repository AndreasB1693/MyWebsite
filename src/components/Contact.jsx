import React from "react";
import {Button} from 'react-bootstrap';
import "../css/Contact.css";

function Contact() {
    const year = new Date().getFullYear();
   
    return( 
        <div class="contact">
        <h2>Get In Touch</h2>
        <h3>Lorem ipsum dolor sit amet, non elit.</h3>
        <p class="contanct-message">Lorem ipsum dolor sit amet, in quis, aenean amet. Phasellus sodales, tellus donec dui, ornare erat.</p>
        <Button variant="secondary" href="mailto:andreas.becker1693@gmail.com">Contact me <i class="fa-solid fa-envelope"/></Button>
        
        <p class="copyright">© by Andreas Becker {year}</p>

       </div>
    )
}

export default Contact;
