import React from 'react'

interface propsType {
    img: string,
    name: string,
    count: string
}

const CategoryCard:React.FC<propsType> = ({img, name, count}) => {
  return (
    <div className='shadow hover:scale-105 hover:shadow-xl transition-transform rounded-lg cursor-pointer'>
        <div className="flex justify-between items-center p-6">
            <div className="spcae-y-4">
                <h3 className='font-medium text-xl'>{name}</h3>
                <p className='text-gray-500'>{count}</p>
            </div>
            <img className='w-[100px]' src={img} alt={name} />
        </div>
    </div>
  )
}

export default CategoryCard