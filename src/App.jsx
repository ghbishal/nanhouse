import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Aboutus from "./components/aboutus/Aboutus";
import Menu from "./components/menu/Menu";
import Team from "./components/ourteam/Team";
import Reservation from "./components/reservation/Reservation";
import Contactus from "./components/contactus/Contactus";
import Testimonial from "./components/testimonial/Testimonial";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <Aboutus />

      <Menu />

      <Team />
      <Testimonial />
      <Contactus />
    </>

    // <div className="App">
    //   <Navbar />

    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/">
    //         <Route index element={<Home />} />
    //         <Route path="aboutus" element={<Aboutus />} />
    //         <Route path="menu" element={<Menu />} />
    //         <Route path="reservation" element={<Reservation />} />
    //         <Route path="testimonial" element={<Testimonial />} />
    //         <Route path="contactus" element={<Contactus />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
