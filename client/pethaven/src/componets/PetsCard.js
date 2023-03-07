import { useStore } from "zustand";
//import { petsStore } from "../data/PetsKeeper";
import { petsStore } from "../Data/PetsKeeper";

function PetCard({ pet }) {
  const pets = useStore(petsStore);

  return (
    <div className="petcard">
      {/* <img src={pet.image_url} alt={pet.name} className="pet-image" />
      <h2 className="pet-name">{pet.name}</h2> */}
    <p className="pet-name" key={pet.id}>{pet.name}</p>
     <img className="pet-image" src={pet.image_url}/>
    </div>
  );
}

export default PetCard;

// function PetCard({pet}){
//     const pets = useStore(petsStore)
//      return (
//      <div className="petcard">
//      <p  key={pet.id}>{pet.name}</p>
//      <img src={pet.image_url}/>
//      </div>)
// }
