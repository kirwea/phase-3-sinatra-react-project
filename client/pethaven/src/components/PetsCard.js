import { useStore } from "zustand";
import { petsowners } from "../data/PetsOwners";


function PetCard({ pet }) {
  const pets = useStore(petsowners);

  return (
    <div className="petcard">
      <img src={pet.image_url} alt={pet.name} className="pet-image" />
      <h2 className="pet-name">{pet.name}</h2>

    </div>
  );
}

export default PetCard;

// function PetCard({pet}){
//     const pets = useStore(petskeeper)
//      return (
//      <div className="petcard">
//      <p  key={pet.id}>{pet.name}</p>
//      <img src={pet.image_url}/>
//      </div>)
// }