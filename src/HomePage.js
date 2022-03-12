import { useState , useEffect } from "react";
import BlogList from './BlogList'; 
import useFetch from './useFetch';

const HomePage = () => {
	
	const { data: blogs , isPending} = useFetch('http://localhost:8000/blogs')
	// const deleteBlog = (id) => {
	// 	const newBlog = blogs.filter(blog => {
	// 		return blog.id !== id;
	// 	});
	// 	setBlog(newBlog);
	// }

	return (
		<div className="home">
			<h1 className="title title--page">Latest Beauty Buys List, March 11, 2022!</h1>
			{isPending && <div className="laod"> Loading... </div>}
			{blogs && <BlogList blogs={blogs}/>}
			{/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title= "Mario's Blogs" /> */}
		</div>
	);
}

export default HomePage;