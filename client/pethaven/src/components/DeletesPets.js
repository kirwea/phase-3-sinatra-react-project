import axios from "axios";
import { useStore } from "zustand";
import { petsowners } from "../data/PetsOwners";

function Delete({pet}) {
  const pets = useStore(petsowners);
  let other_pets = pets.petsData.filter((thispet)=>{
    return thispet.id !== pet.id
   })
  const handleDelete = () => {
    axios
      .delete(`http://localhost:9292/pets/${pet.id}`)
      .then(() => pets.setPetsOwners(other_pets));
  };
  return <button onClick={handleDelete} id="delete-btn"> Delete</button>;
}

export default Delete;