import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';

import Landing from './Routes/Landing'
import Projects from './Routes/Projects'
import Socials from "./Routes/Socials";
import NavBar from './Components/NavBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/socials" element={<Socials />} />
        </Routes>
        <div className="navBarFade"></div>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
