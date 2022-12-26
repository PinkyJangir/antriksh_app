import React from "react";
import Footer from "./Footer";
import './Blogs.css'
const Blogs=()=>{
    return(
        <>
        <div>
            <div className="case_study">
                <h1><center>Blogs</center>
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
export default Blogs;