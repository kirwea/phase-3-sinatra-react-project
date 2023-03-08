import axios from "axios";
import { useStore } from "zustand";
//import { petsStore } from "../data/PetsKeeper";
import { petsStore } from "../Data/PetsKeeper";
function Delete({pet}) {
  const pets = useStore(petsStore);
  let other_pets = pets.petsList.filter((thispet)=>{
    return thispet.id !== pet.id
   })
  const handleDelete = () => {
    axios
      .delete(`https://pets-advanced.onrender.com/pets/${pet.id}`)
      .then(() => pets.setPetsStore(other_pets));
  };
  return <button onClick={handleDelete} id="delete-btn"> Delete</button>;
}

export default Delete;
