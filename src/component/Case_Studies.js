import React from "react";
import './Case_Studies.css'
import Footer from "./Footer";
const Case_study=()=>{
    return(
        <>
        <div>
            <div className="case_study">
                <h1>
                   <center>Case Studies</center>
                </h1>
            </div>
            <div>
                <div className="coming_Soon">
                    Coming Soon!
                </div>
                <div className="case_pic">
                    <img src="https://antrikshglobal.com/wp-content/uploads/2022/10/about_us_1.jpg" width='50%' className="pic_radius"/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Case_study;