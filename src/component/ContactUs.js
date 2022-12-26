import './Contact.css';
import React from 'react';
import Footer from './Footer';
function ContactUs() {
    return(
        <>
           <div>
            <div className='Contect'>
            <h1>
                Contect Us
            </h1>
            </div> 
                <center>
                <div className='center'>
                <form>  
                    <input type="text" FullName="Fullname" placeholder="Full Name"/><br/> 
                    <input type="text" Email="Email"placeholder=" Email"/><br/> 
                    <input type="text" Phone="Phone"placeholder="Phone"/> <br/>  
                    <input type="text" Company="Company"placeholder="Company"/> <br/>
                    <div>
            
                    <label><input type="checkbox" />Video </label>
                    <label><input type="checkbox" />Digital </label>
                    <label><input type="checkbox" />Design </label>
                    <label><input type="checkbox" />Content </label>
                    <label><input type="checkbox" />Website </label>
                    <label><input type="checkbox" />Sound </label>
                    <label><input type="checkbox" />Cloud </label><br/>
                    <label><input type="checkbox" />Consultation </label>
                    <label><input type="checkbox" />Other </label><br/>
                    <textarea id="freeform" name="freeform" rows="4" cols="50" placeholder="Write us a message"></textarea><br/>
                    <div className='submit_button'>
                    <input type="Send" value="Send"></input>
                    </div>
                    </div>
                </form> 
                </div>
                </center>
            
            </div>
            <Footer/>
        </>
    )
}
export default ContactUs;
