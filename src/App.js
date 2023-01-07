import logo1 from './images/logo.png'
import './App.css';
import Landing from './components/Landing';
import Products from './components/Products';
import Services from './components/Services';
import Blog from './components/Blog';
import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';

function App() {
  const NavBar = () => {
    return(
      <>
        <div className="relative flex border border-t-0 border-x-0 border-b-grey text-center py-5 px-20 bg-amber-600/50">
        <div className="lg:hidden md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
        <div className="font-semibold text-xl mr-40 flex hover:cursor-pointer">
          <img className='w-14' src={logo1} alt="grocers logo" srcSet="" />
          <div className='text-3xl font-light -ml-3'>Grocers</div>
        </div>
        <div className="container grid grid-flow-col justify-between">
            <div className="grid grid-flow-col gap-5 font-extralight text-xl ml-10">
                <Link to='/' className="border border-transparent rounded-md px-5 py-1 hover:text-white">Home</Link>
                <Link to='/shop' className="border border-transparent rounded-md px-5 py-1 hover:text-white">Shop</Link>
                <Link to='/services' className="border border-transparent rounded-md px-5 py-1 hover:text-white">Our Services</Link>
                <Link to='/blog' className="border border-transparent rounded-md px-5 py-1 hover:text-white">Blog</Link>
            </div>
            <div className="grid grid-flow-col font-extralight text-xl mr-2">
                <div className="border border-transparent px-2 py-1 text-lg hover:text-white">Log In</div>
                <div>|</div>
                <div className="border border-transparent px-2 py-1 text-lg hover:text-white">Register</div>
                <div className="px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
            </div>
        </div>
        </div>
      </>
    )
  }
  const Footer = () => {
    return(
      <>
        <div className="border border-b-0 border-x-0 border-t-grey p-5 px-10 bg-amber-600/50 font-light text-lg flex justify-between">
        <div className='my-auto'>&copy; Grocers 2023</div>
        <div className='flex my-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <p>: (+234) 08104642364
            <div>(+234) 07043946867</div>
          </p>
        </div>
        <div className="">
          <div>Twitter: @Grocers</div>
          <div>Instagram: @Grocers_IG</div>
          <div>Facebook: @Grocers_FB</div>
          <div>Pintrest: @Grocers_pin</div>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      <div className="bg-amber-600/50">
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/shop' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
