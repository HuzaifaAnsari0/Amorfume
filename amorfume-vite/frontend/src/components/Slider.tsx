const Slider = () => {
    return (
        <div className="relative max-w-9xl mx-auto ">
        <img className="h-96 w-full object-cover " src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"/>
        <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">How we describe our perfume?</h2>
        </div>
    </div>
    )
}

export default Slider