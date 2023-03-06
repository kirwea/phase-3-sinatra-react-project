import { create } from "zustand";

const petsData = (set) =>({
petsData:[],
setPetsKeeper:(pet) =>{
    set((state) =>({
        petsData:pet
    })) 
}
})
const petsowners = create(petsData)

export {petsowners};