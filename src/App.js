import React,{useState} from 'react';
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import './App.css';
import Footers from './Component/Footer/Footer';
import Navbar from './Component/Navbar/Navbar';
import Page404 from './Component/Page404/Page404';
import Home from './Page/Home/Home';
import David from './Page/OurTeam/David';
import JohnF from './Page/OurTeam/JohnF';
import OurTeam from './Page/OurTeam/OurTeam';
import Tumula from './Page/OurTeam/Tumula';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <div >
      {!loading && (
    <Router>
    {/* <Navbar/> */}

      <Routes> 
         <Route  path='/' element ={<Home/>}/>
         <Route  path='/ourTeam' element ={<OurTeam/>}/>
         <Route  path='/ourteam-tumula' element ={<Tumula/>}/>
         <Route  path='/ourteam-john' element ={<JohnF/>}/>
         <Route  path='/ourteam-david' element ={<David/>}/>
        <Route path="/*" element ={<Page404/>}/>
      </Routes>
      <Footers/>
    </Router>
      )}
    </div>
  );
}

export default App;
