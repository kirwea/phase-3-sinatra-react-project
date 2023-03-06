//import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
// import Mypets from './views/ClientsPets';
// import AllPets from './views/PetsAlbum';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";




function App() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
  {/* <Route exact path="/mypets" element={<Mypets/>}/>
  <Route exact path="/allpets" element={<AllPets/>}/> */}

    </Routes>
    </Router>
  );
}

export default App;