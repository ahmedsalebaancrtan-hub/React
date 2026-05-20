import { ChevronDown } from "lucide-react"




export const Header = () => {
  return (
   <header className="w-full px-10 py-6 flex items-center justify-between">
      
      {/* LEFT SIDE */}
      <div className="flex items-center gap-16">
        
        {/* LOGO */}
        <img src="logo.svg" alt="logo" className="w-28" />

        {/* NAV LINKS */}
        <nav>
          <ul className="flex items-center gap-10 text-sm font-medium text-gray-800">
            <li>
              <a href="#">Destinations</a>
            </li>

            <li>
              <a href="#">Hotels</a>
            </li>

            <li>
              <a href="#">Flights</a>
            </li>

            <li>
              <a href="#">Bookings</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-8">
        
        {/* LOGIN */}
        <a href="#" className="text-sm font-medium text-gray-800">
          Login
        </a>

        {/* SIGN UP BUTTON */}
        <button className="border border-gray-400 px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
          Sign up
        </button>

        {/* LANGUAGE */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-sm font-medium">EN</span>
          <ChevronDown size={18} />
        </div>
      </div>
    </header>
  );
  
}
