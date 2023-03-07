import logo from './logo.svg';
import './App.css';
import Home from "./Views/Home";
import AllPets from "./Views/PetsGallery";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
//import MyPets from "./Views/UsersPets";
import Mypets from './Views/UsersPets';



function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/mypets" element={<Mypets/>}/>
    <Route exact path="/allpets" element={<AllPets/>}/>
    </Routes>
    </Router>
  );
}

export default App;
