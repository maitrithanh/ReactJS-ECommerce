import {RxCross1} from 'react-icons/rx'
import { useCartContext } from '../context/cartContext'
import CartProduct from './CartProduct';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cart = ({setShowCart}:any) => {
    const {product} = useCartContext();
  return (
    <div className='bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20' onClick={() => setShowCart(false)}>
        <div className="max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6" onClick={(e) => e.stopPropagation()}>
            <RxCross1 className="absolute right-0 top-0 m-6 cursor-pointer text-[24px]" onClick={() => setShowCart(false)}/>
            <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">
                Your Cart
            </h3>

            <div className="mt-6">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {product?.map((el: any) => (<CartProduct key={el.name} img={el.img} name={el.name} price={el.price}/>))}
            </div>
            <button className='bg-accent hover:bg-accentDark text-white text-center w-full rounded-3xl py-2 mb- mt-4'>View Cart</button>
            <button className='bg-accent hover:bg-accentDark text-white text-center w-full rounded-3xl py-2 mt-4'>Check Out</button>
        </div>
    </div>
  )
}

export default Cart