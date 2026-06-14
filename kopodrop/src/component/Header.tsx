import { ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import { UseCounterStore } from "../store/counterStore";



export default function Header() {

        const {count} = UseCounterStore();
  return (
  <div className="w-full py-4 px-4 flex items-center justify-between">
    <div className="logo-links flex items-center gap-10">
        <Link to={'/'}>
        <div className="logo-container">
            <img src="logo.svg" alt="image" />

        </div>
        </Link>

        <div className="links flex items-center gap-2 text-gray-700">
            <div className="link">
              <Link to={'/learn'}>Learn</Link>
            </div>
            <div className="link flex items-center gap-1">
               <Link to={'/resources'}>Resources</Link>
                  <ChevronDown />
            </div>
            <div className="link">
                <Link to={'/fqs'}>FQS</Link>
            
            </div>

        </div>
    </div>
<div className="installkopodrop">
    <button className="p-4 bg-[#023047] text-white rounded-xl">
        installkobodrop{count}
    </button>
</div>
</div>
  )
}
