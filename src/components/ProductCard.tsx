import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {CiShoppingBasket } from 'react-icons/ci'
import { useCartContext } from '../context/cartContext'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

interface propsTypes {
    name: string,
    img: string,
    price: string
}
const ProductCard:React.FC<propsTypes> = ({name, img, price}) => {
    const {addToCart} = useCartContext();
    const addProductToCart = () => {
        toast.success("Added to Cart!", {position: toast.POSITION.TOP_RIGHT});
        addToCart({img, name, price})
    }
  return (
    <div className='shadow hover:scale-105 hover:shadow-xl transition-transform rounded-lg cursor-pointer'>
        <img src={img} alt={name} />
        <div className="space-y-2 relative p-4">
            <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h3 className="font-medium">{name}</h3>
            <h3 className="text-2xl font-medium text-red-600">{price}</h3>
            <button className='absolute -top-4 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer'
                onClick={addProductToCart}
            > 
                <CiShoppingBasket/>
            </button>
        </div>
    </div>
  )
}

export default ProductCard