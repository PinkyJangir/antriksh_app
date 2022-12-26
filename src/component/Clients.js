import React from "react";
function Clients() {
    var Pictures = [
        'https://antrikshglobal.com/wp-content/uploads/2022/10/3.png',
        'https://antrikshglobal.com/wp-content/uploads/2022/10/1.png',
        'https://antrikshglobal.com/wp-content/uploads/2022/10/10.png',
        "https://antrikshglobal.com/wp-content/uploads/2022/10/8.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/14.png",
        'https://antrikshglobal.com/wp-content/uploads/2022/11/little-italy.png',
        'https://antrikshglobal.com/wp-content/uploads/2022/10/25.png',
        'https://antrikshglobal.com/wp-content/uploads/2022/10/4.png',
        'https://antrikshglobal.com/wp-content/uploads/2022/10/2.png',
        'https://antrikshglobal.com/wp-content/uploads/2022/10/7.png',
        'https://antrikshglobal.com/wp-content/uploads/2022/10/9.png',
        'https://antrikshglobal.com/wp-content/uploads/2022/10/10.png',
        "https://antrikshglobal.com/wp-content/uploads/2022/10/11.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/12.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/19.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/20.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/18.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/23.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/22.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/24.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/26.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/27.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/31.png",
        "https://antrikshglobal.com/wp-content/uploads/2022/10/17.png",

    ];
    return (
        <div className='container section'>
            <div className='row'>
                <div className='col-12'>
                    <p className='section_head'>
                        Our Clients</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <div className="title_desc">
                        <p className="desc">We are global and capable of delivering projects worldwide, thanks to seamless digital integration and adherence to proven productive & creative processes every time. We have worked for regional & international brands from different sectors – engineering, manufacturing, consumer tech, edtech, education, hospitality, healthcare, IT, ITeS, real estate, etc.</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                {Pictures.map((object, i) => <div className="col-2"><img src={object} key={i} width='140'/></div>)}
            </div>
        </div>
    );
}

export default Clients;
