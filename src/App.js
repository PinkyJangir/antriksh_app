import Navbar from './component/Navbar';
import { Route , Routes} from "react-router-dom";
// import Footer from './component/Footer';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Service from './component/Service';
import ContactUs from './component/ContactUs';
import Case_Studies from './component/Case_Studies';
import Blogs from './component/Blogs';


function App() {
  return (
    <div>
      <div className='App'>
      <Navbar/>
        <Routes>
        <Route  path="/" element={<Home />} />
          <Route  path="/Blogs" element={<Blogs />} />
          <Route  path="/Case_study" element={<Case_Studies />} />
          <Route  path="/About Us" element={<AboutUs />} />
          <Route  path="/Services" element={<Service />} />
          <Route  path="/Contact Us" element={<ContactUs />} />   
      </Routes>
      </div>
    </div>
  );
}

export default App;
