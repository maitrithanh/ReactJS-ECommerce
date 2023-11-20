import React from 'react'
import CategoryCard from './CategoryCard'
const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__1.webp"
    },
    {
        id: 1,
        name: "Fresh Fruits",
        count: "9 Products",
        img: "/category__2.webp"
    },
    {
        id: 2,
        name: "Canned Goods",
        count: "10 Products",
        img: "/category__3.webp"
    },
    {
        id: 3,
        name: "Bread & Bakery",
        count: "12 Products",
        img: "/category__4.webp"
    },
    {
        id: 4,
        name: "Fishes",
        count: "10 Products",
        img: "/category__5.webp"
    },
    {
        id: 5,
        name: "Eggs & Dairy",
        count: "7 Products",
        img: "/category__6.webp"
    },
    {
        id: 6,
        name: "Soft Drinks",
        count: "5 Products",
        img: "/category__7.webp"
    }
]
const Category = () => {
  return (
    <div className='container pt-16'>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((element) => <CategoryCard key={element.id} img={element.img} name={element.name} count={element.count} />)}
        </div>
    </div>
  )
}

export default Category