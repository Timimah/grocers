import logo1 from './images/logo.png'
import './App.css';
import Landing from './components/Landing';

function App() {
  return (
    <>
      <div className="bg-amber-600/50">
      <div className="relative flex border border-b-grey text-center py-5 px-20">
        <div className="font-semibold text-xl mr-40 flex hover:cursor-pointer">
          <img className='w-14' src={logo1} alt="grocers logo" srcset="" />
          <div className='text-xl mt-2 font-normal'>Grocers</div>
        </div>
        <div className="container grid grid-flow-col justify-between">
            <div className="grid grid-flow-col gap-5 font-extralight text-xl ml-10">
                <div className="border border-transparent rounded-md px-5 py-1 hover:text-white">Home</div>
                <div className="border border-transparent rounded-md px-5 py-1 hover:text-white">Shop</div>
                <div className="border border-transparent rounded-md px-5 py-1 hover:text-white">Our Services</div>
                <div className="border border-transparent rounded-md px-5 py-1 hover:text-white">Blog</div>
            </div>
            <div className="grid grid-flow-col font-extralight text-xl mr-2">
                <div className="border border-transparent px-5 py-1 text-lg hover:text-white">Log In</div>
                <div className="border border-transparent border-l-black px-4 py-1 text-lg hover:text-white">Register</div>
                <div className="px-3 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 hover:stroke-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </div>
        </div>
      </div>
      <Landing />
      </div>
    </>
  );
}

export default App;
