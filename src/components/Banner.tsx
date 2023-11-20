const Banner = () => {
  return (
    <div className='container pt-16 flex justify-center'>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 cursor-pointer">
            <div className="overflow-hidden rounded-lg">
                <img className='hover:scale-105 transition-transform' src="/banner__1.webp" alt="banner" />
            </div>
            <div className="overflow-hidden rounded-lg cursor-pointer">
                <img className='hover:scale-105 transition-transform' src="/banner__2.webp" alt="banner" />
            </div>
        </div>
    </div>
  )
}

export default Banner