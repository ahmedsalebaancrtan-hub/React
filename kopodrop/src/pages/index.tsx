import Header from '../component/Header'
import Footer from '../component/footer'
import { Outlet } from 'react-router-dom'

export const MainPage  = () => {
  return (
    <div>
        <Header/>
   <div className='w-90% mx-auto'>
   <Outlet/>
   </div>

        <Footer/>

    </div>
  )
}
