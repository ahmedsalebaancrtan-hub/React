
import { useState,useEffect } from "react"
export const Counter = () => {

    const  [count, setcount] = useState(0)
    const [skipValue, setSkipValue] = useState(1)
    const [email,setemail] = useState("")

    const IncerementHandler = () => {
        setcount(count + skipValue)
     
    }

    const DecrementHandler = () =>{
       setcount(count - skipValue)
      
    }

    const ResetHandler = () =>{
        setcount(0)
    }
    const handleSkipValueChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const parsedSkipVlaue = +(e.target.value)
     setSkipValue(parsedSkipVlaue)

    }

    useEffect(()=>{
        console.log("new count", count)

    },[count])


  return (
    <div>
     <h1 className="text-center font-bold text-xl">
      {count}
     </h1>
     <p>
        entered emailAdress {email}
     </p>
     <div className="flex items-center gap-3 justify-center">
        <button onClick={IncerementHandler} className="bg-blue-700 text-white rounded-xl p-7 hover:scale-105 transition-all">Increment</button>
        <button onClick={DecrementHandler} className="bg-red-700 text-white rounded-xl p-7 hover:scale-105 transition-all">Decrement</button>
        <button onClick={ResetHandler} className="bg-yellow-700 text-white rounded-xl p-7 hover:scale-105 transition-all">
            Reset
        </button>
        <input
        value={skipValue}
        onChange={handleSkipValueChange}
        
        type="number" placeholder="value" className="border p-2  rounded-xl border-gray-300 focus:border-blue-800" />
        <input
        value={email}
        onChange={(e) => {
            setemail(e.target.value)

        }}
        
        type="email" placeholder="value" className="border p-2  rounded-xl border-gray-300 focus:border-blue-800" />
     </div>
    </div>

    
  )
}
