/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import CartCountBadge from "./CartCountBadge";
const Navbar = ({setShowCart}:any) => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container hidden lg:block">
        <div className="flex justify-between items-center p-8">
          <h1 className="text-4xl font-medium">Logo</h1>

          <div className="relative w-full max-w-[500px] m-4">
           <ul className="flex">
            <li className="mr-4 px-4 py-2 font-medium active">
              <a href="#">Home</ a>
            </li>
            <li className="mr-4 rounded-full px-4 py-2 font-medium">
              <a href="#Blog">Blog</a>
            </li>
           </ul>
          </div>

          <div className="relative w-full max-w-[500px] m-4">
            <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product..."/>
            <CiSearch className="absolute top-0 right-0 mt-4 mr-4 text-gray-500" size={20} />
          </div>

          <div className="flex gap-4">
            <div className="icon__wrapper">
              <CiUser />
            </div>
            <div className="icon__wrapper relative cursor-pointer" onClick={() => setShowCart(true)}>
              <CiShoppingCart />
              <CartCountBadge size="w-[25px] h-[25px]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar