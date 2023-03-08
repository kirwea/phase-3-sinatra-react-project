

import axios from "axios";
import { useStore } from "zustand";
//import { petsStore } from "../data/PetsKeeper";
import { petsStore } from "../Data/PetsKeeper";

function Search(){
const pets = useStore(petsStore)
const handleSearch = (e) => {
    console.log(e.target.value)
axios.post("https://ngunjiri-sinatra.onrender.com/pets/search_all",{
    query: e.target.value
}).then( (r) =>
    pets.setPetsStore(r.data)
)
} 
return(
<input className="search" type="text" placeholder="Search by name or breed" onChange={handleSearch}></input>
)
}
export default Search;