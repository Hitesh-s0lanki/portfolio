import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Contactus from './Components/Contactus';
import Education from './Components/Education';

function App() {
  return (
    <div className="App">
      <HashRouter >
      <div className="d-flex">
        <div className="MenuBox" style={{height:"100vh",width:"6%", backgroundColor:"#222"}}>
          <Navbar />
        </div>
        <div className="mainbox d-flex justify-content-center"  style={{height:"100vh",width:"94%",background:"#9E9E9E"}} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
        </div>
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
