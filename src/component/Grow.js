import './grow.css'
function Grow() {
    return (
        <div className="container grow">
            <div className="row">
                <div className="col-8">
                    <p className="title">Grow your Career with Antriksh!</p>
                    <p>
                        If you love to create, think, ideate, design, write, analyse, research, get in touch with us for one of the following roles :
                    </p>
                    <p>
                        We at Antriksh are always eager to add valuable creative & skilled professionals to our team from time to time while also collaborating with freelancers within our network.
                    </p>
                </div>
                <div className="col-4">
                    <div  className='btn_group'>
                        <button className='btn'>Content Writer</button>
                        <button className='btn'>Video Editor</button>
                        <button className='btn'>Graphic Designer</button>
                        <button className='btn'>Website Designer</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grow;