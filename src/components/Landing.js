import { Link } from "react-router-dom"

const Landing = () => {
    return(
        <>
            <div className="bg-pickle bg-no-repeat bg-cover">
                <div className="h-screen text-center text-6xl font-medium text-white p-48 bg-amber-600/50">
                    <h1>Shopping has never been easier!</h1>
                    <Link to="/shop" className='text-2xl bg-amber-600/50 px-5 py-3 mt-10'>Shop Now!</Link>
                </div>
            </div>
        </>
    )
}

export default Landing      