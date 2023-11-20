import BlogCard from './BlogCard'

const data = [
    {id: 0, img: "/post__1.webp", title: "Healthy Food Healthy Life", date: "Sep 18, 2023", comment: 8},
    {id: 1, img: "/post__2.webp", title: "Healthy Food", date: "Sep 19, 2023", comment: 9},
    {id: 2, img: "/post__3.webp", title: "Healthy Life", date: "Sep 20, 2023", comment: 10},
]

const BlogSection = () => {
  return (
    <div className='container pt-16'>
        <h2 className="font-bold text-2xl">
            Lastest News
        </h2>
        <p className="text-gray-500">
            Present posts in a best way to hightlight interesting moments of your blog.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map(element => 
                <BlogCard key={element.id} img={element.img} title={element.title} date={element.date} comment={element.comment}/>)
            }
        </div>
    </div>
  )
}

export default BlogSection