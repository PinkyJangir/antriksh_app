import Clients from "./Clients";
import Footer from "./Footer";
import Grow from "./Grow";
import Hero from "./Hero";
import Services from "./Services";

function Home() {
    return(
        <div>
            <Hero/>
            <Services/>
            <Clients/>
            <Grow/>
            <Footer/>
        </div>
    );
}

export default Home;