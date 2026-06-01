import { Counter } from "./component/Counter"
import Header from "./component/Header"
import Hero from "./component/Hero"
import Products from "./component/products"


function App() {
  return (
<div className="w-[90%] mx-auto">
  <Header/>
  <Hero/>
  {/* <Counter/> */}
  <Products/>

</div>



  )
}

export default App