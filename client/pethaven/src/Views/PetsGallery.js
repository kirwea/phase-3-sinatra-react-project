

import PetCard from "../componets/PetsCard";
import { useStore } from "zustand";
//import { petsStore} from "../data/PetsKeeper";
import { petsStore } from "../Data/PetsKeeper";
import Search from "../componets/SearchForPets";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
//import AddPet from "../componets/AddNewPets";
import AddPet from "../componets/AddsNewPets";

function AllPets() {
  const pets = useStore(petsStore);
  const [myPets, setMyPets] = useState([]);

  useEffect(() => {
    // This will be the fetch to a specific user's pets
    axios.get('https://pets-advanced.onrender.com/pets')
      .then((r) => setMyPets(r.data));
  }, []);

  useEffect(() => {
    pets.setPetsStore(myPets);
  }, [myPets]);

  return (
    <>
      <div className="header">
        <h1 className="title">Petfinder</h1>
        <Link exact to="/" className="link">Home</Link>
        <Search />
      </div>
      <div className="pets-container">
      {pets.petsList.map((pet)=>{
     return <PetCard pet={pet}/>
       })}
      </div>
    </>
  );
}

export default AllPets;