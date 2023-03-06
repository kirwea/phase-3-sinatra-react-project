import axios from "axios";
import { useStore } from "zustand";
import { petsowners } from "../data/PetsOwners";

function Search(){
const pets = useStore(petsowners)
const handleSearch = (e) => {
    console.log(e.target.value)
axios.post("http://localhost:9292/pets",{
    query: e.target.value
}).then( (r) =>
    pets.setPetsOwners(r.data)
)
} 
return(
<input className="search" type="text" placeholder="Search by name or breed" onChange={handleSearch}></input>
)
}
export default Search;