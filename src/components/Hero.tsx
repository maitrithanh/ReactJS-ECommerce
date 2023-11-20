import {BsArrowRight } from 'react-icons/bs'
const Hero = () => {
  return (
    <div className="container">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">

        <div className="xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative">
          <img className="w-full h-full object-cover rounded-lg" src="/hero__1.webp" alt="hero image"/>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits</p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
              Dried Fruits Best Healthy
            </h2>
            
            <p className="text-xl text-gray-500 pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-2xl text-red-600 sm:text-4xl pb-4 sm:pb-8">
              $18.26
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 sm:px-6 sm:py-3 cursor-pointer text-[14px]">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-full object-cover rounded-lg" src="/hero__2.webp" alt="hero image"/>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <p className="text-2xl sm:text-3xl font-bold">Best Yummy Pizza</p>
            <p className="text-xl text-gray-500 pt-4">Starting At</p>
            <div className="font-medium text-2xl text-red-600 sm:text-4xl pb-8">
              $25
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 cursor-pointer text-[14px]">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-full object-cover rounded-lg" src="/hero__3.webp" alt="hero image"/>
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
            <p className="text-2xl sm:text-3xl font-bold">Best Yummy Chips</p>
            <p className="text-xl text-gray-500 pt-4">Starting At</p>
            <div className="font-medium text-2xl text-red-600 sm:text-4xl pb-8">
              $10
            </div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 cursor-pointer text-[14px]">
              Shop Now <BsArrowRight />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero