//import logo from './logo.svg';

import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import HomePage from "./Components/HomePage/HomePage.jsx"
import Collaboration from "./Components/Collaboration/Collaboration.jsx"
import Concern from "./Components/Concern/Concern.jsx"
import ContactUs from "./Components/ContactUs/ContactUs.jsx"
import Initiative from "./Components/Initiative/Initiative.jsx"
import SwachBharat from "./Components/SwachBharat/SwachBharat.jsx"
import Footer from "./Components/Footer/Footer.jsx"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/collaboration' element={<Collaboration />} />
          <Route path='/concern' element={<Concern />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/initiative' element={<Initiative />} />
          <Route path='/swachbharat' element={<SwachBharat />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
