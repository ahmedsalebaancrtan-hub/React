

export const Hero = () => {
  return (
     <section className="w-full min-h-screen px-10 py-16 flex items-center justify-between">
      
      {/* LEFT CONTENT */}
      <div className="max-w-xl">

        {/* SMALL TITLE */}
        <p className="text-orange-500 font-semibold uppercase tracking-wide">
          Best Destinations Around The World
        </p>

        {/* MAIN HEADING */}
        <h1 className="text-7xl font-bold leading-tight text-[#181E4B] mt-6">
          Travel, enjoy and live a new and full life
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-6 leading-8">
          Built Wicket longer admire do barton vanity itself do in it.
          Preferred to sportsmen it engrossed listening.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-6 mt-10">

          {/* FIND OUT MORE */}
          <button className="bg-yellow-400 px-7 py-4 rounded-xl text-white font-medium shadow-lg hover:scale-105 transition">
            Find out more
          </button>

          {/* PLAY DEMO */}
          

            <span className="text-gray-600 font-medium">
              Play Demo
            </span>
          </div>
        </div>
      

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <img
          src="hero.svg"
          alt="traveler"
          className="w-150 object-contain"
        />
      </div>
    </section>
  )
}
