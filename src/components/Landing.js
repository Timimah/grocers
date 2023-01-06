import pickle from '../images/pickle.jpg'

const Landing = () => {
    return(
        <>
            <img className='-z-10 absolute w-full h-full' src={pickle} alt="" srcset="" />
            <div className="h-screen text-center text-6xl font-medium text-white mt-48">
                <h1>Pickle Perfection</h1>
                <button className='text-2xl bg-amber-600/50 px-5 py-3 mt-10'>Shop Now</button>
            </div>
        </>
    )
}

export default Landing