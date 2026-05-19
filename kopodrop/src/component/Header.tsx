import { ChevronDown } from "lucide-react"



export default function Header() {
  return (
  <div className="w-full py-4 px-4 flex items-center justify-between">
    <div className="logo-links flex items-center gap-10">
        <div className="logo-container">
            <img src="logo.svg" alt="image" />

        </div>

        <div className="links flex items-center gap-2 text-gray-700">
            <div className="link">
                <a href="#">Learn</a>
            </div>
            <div className="link flex items-center gap-1">
                <a href="#">Resources</a>
                  <ChevronDown />
            </div>
            <div className="link">
                <a href="#">FAQs</a>
            
            </div>

        </div>
    </div>
<div className="installkopodrop">
    <button className="p-4 bg-[#023047] text-white rounded-xl">
        installkobodrop
    </button>
</div>
</div>
  )
}
