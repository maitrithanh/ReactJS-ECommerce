import {IoIosMenu } from "react-icons/io"
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";
import CartCountBadge from './CartCountBadge';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobileNavbar = ({setShowCart, setShowMenu}:any) => {
  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className="container p-8 lg:hidden">
        <div className="flex justify-between item-center">

          <div className="flex item-center gap-6 cursor-pointer" onClick={() => setShowMenu(true)}>
            <IoIosMenu size={30}/>
            <CiSearch size={24}/>
          </div>

          <h1 className='text-4xl'>Logo</h1>

          <div className="flex gap-4 text-[30px]">
            <CiUser />
            <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
              <CiShoppingCart />
              <CartCountBadge size="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar