import { create } from "zustand"


interface CounterState {
    count : number,
    Increment: () => void,
    Decrement : () => void
}


export const  UseCounterStore = create<CounterState>((set) => ({
    count : 0,

    Increment : () =>{
   set((state) => ({
    count : state.count + 1
   }))

    },
    Decrement : ()=> {
           set((state) => ({
    count : state.count - 1
   }))

    }

}))