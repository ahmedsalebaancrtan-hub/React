

export default function Hero() {
  return (
    <div className="flex items-center justify-between">

<div className="">
    <h1 className="text-[48px] leading-14 font-semibold">
        Start spending the <br /> smart way
    </h1>

    <p className="text-gray-500 w-120">Take Control of Your Finances Anytime, Anywhere with Kobodrop. Discover the Smart Way to Use Your Money!</p>
    <div className="images flex items-center gap-4 my-8">
        <img src="appstore.svg" alt="appstore.svg" />
        <img src="playstore.svg" alt="" />
    </div>
</div>
<div className="hero-image">
    <img src="hero.svg" alt="" className="w-130" />
</div>

    </div>
  )
}
