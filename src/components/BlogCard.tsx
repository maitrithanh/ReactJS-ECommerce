import React from 'react'

interface propsTypes {
    title: string,
    img: string,
    date: string,
    comment: number
}

const BlogCard:React.FC<propsTypes> = ({title, img, date, comment}) => {
  return (
    <div className='space-y-4 cursor-pointer'>
        <img className='rounded-lg hover:scale-105 transition-transform' src={img} alt={title} />
        <div className="text-accent font-medium">
            <span>{date} / </span>
            <span>{comment} comments</span>
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default BlogCard