import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Homepage from "./components/homepage/homepage.js";
import AboutUs from "./components/about/about.js";
import Contact from "./components/contact/contact.js";
import Services from "./components/services/services.js";
import Routing from "./components/Routing/Routing";
import Counter from "./components/Concepts/contextapi/counter";
import Shop from "./components/Ecommerce/Shop.js";
import Cart from "./components/Ecommerce/Cart.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>

        {/* here is the cart */}
        <Cart></Cart>

        {/* context API */}
        <Counter></Counter>
        <br />
        <br />

        <Shop></Shop>

        <br />
        {/* to implement the routing */}
        <Routing></Routing>
        <br />
      </Router>
    </div>
  );
}

export default App;
