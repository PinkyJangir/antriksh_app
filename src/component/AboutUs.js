import "./about_us.css";
import React from "react";
import Footer from "./Footer";
const AboutUs=()=>{
    return(
        <>
        <div>

            <div className="About_us">
                <h1>About Us</h1>
            </div>
            <div className="about_pic">
            <img src="https://antrikshglobal.com/wp-content/uploads/2022/11/about_us_antriksh.jpg" width='300'/>
            </div>
            <div className="for_about_text">
                Every business starts with a dream, a vision. 
            Every product/service has a story waiting to be discovered,
             to be promoted. We at Antriksh help you with the apt narration,
              representation & strategization of your product’s media creation
               & marketing.
               <br/>
               <p>
               Antriksh means space. The space represents a limitless 
               expanse of possibilities. We started with the idea of being a 
               creative space for businesses & individuals from various domains 
               and a boosting platform for creating promotional media & business 
               support. We at Antriksh are a team of young creative professionals
                who ideate, conceptualise, create and deliver market-ready content & media in all formats.
               </p>
            </div>
            <div className="about_text_2">
                <p>
                We provide services such as video creation, content writing,
                 ideating strategies, sound design & music production, graphic
                  designing, website & app development, cloud services, other 
                  IT-enabled services & digital marketing for all kinds of brands,
                   businesses and independent professionals.
                </p>
            </div>
            <div className="about_pic2">
            <img src="https://antrikshglobal.com/wp-content/uploads/2022/11/about_us_2antriksh-1536x1293.jpg" width='300'/>

            </div>
        </div>
        <Footer/>
        </>
    )
}
export default AboutUs;