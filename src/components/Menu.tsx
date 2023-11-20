import {RxCross1} from 'react-icons/rx'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Menu = ({setShowMenu}:any) => {
  return (
    <div className='bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20' onClick={() => setShowMenu(false)}>
        <div className='max-w-[400px] w-full h-full bg-white absolute left-0 top-0 p-6' onClick={e => e.stopPropagation()}>
            <RxCross1 className="absolute right-0 top-0 m-6 cursor-pointer text-[24px]" onClick={() => setShowMenu(false)}/>
            <h3 className='font-medium text-gray-600 text-lg uppercase mb-8'>
                Menu
            </h3>
            <ul>
                <li className='px-4 py-2 font-medium active w-fit cursor-pointer'>
                    <a href="#">Home</a>
                </li>
                <li className='px-4 py-2 font-medium w-fit cursor-pointer'>
                    <a href="#Blog">Blog</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu