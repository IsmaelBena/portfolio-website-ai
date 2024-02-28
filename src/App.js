import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import './App.css';

import Landing from './Routes/Landing'
import Projects from './Routes/Projects'

import NavBar from './Components/NavBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
