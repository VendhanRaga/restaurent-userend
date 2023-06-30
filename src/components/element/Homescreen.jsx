import Button from './Button'
export const Homescreen =()=>{
    return(
        <div className="briyani w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="briyani-deescription w-full md:w-1/2 p-3">
                <h2 className="mb-6 text-4xl font-bold text-white">
                    Sir Your Order Please
                </h2>
                <p className="font-semibold text-lg text-red-600 py-2">
                    Enjoy Your food!
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        See Menu
                    </a>
                </div>
            </div>
            <div className="briyani-image w-full h-1000 md:w-1/2 p-3 flex justify-end">
                <img src={require("./briyani.png")} alt="banner" className="max-h-95" />
            </div>
        </div>
    )
}

export default Homescreen