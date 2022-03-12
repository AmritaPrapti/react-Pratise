import { useState , useEffect } from "react";
import BlogList from './BlogList'; 
const HomePage = () => {
	const [blogs, setBlog] = useState(null);
	const [isPending, setIspending] = useState(true);
	const deleteBlog = (id) => {
		const newBlog = blogs.filter(blog => {
			return blog.id !== id;
		});
		setBlog(newBlog);
	}

	useEffect(() => {
		setTimeout(() => {
			fetch('http://localhost:8000/blogs').then(res => {
				if(!res.ok){
					throw Error("Could not Fetch data from server")
				}
				return res.json();
			}).then(data => {
				setBlog(data);
				setIspending(false);
			}).catch(err => {
				console.log(err.message);
			})
		}, 1000)
	}, [])

	return (
		<div className="home">
			<h1 className="title title--page">Latest Beauty Buys List, March 11, 2022!</h1>
			{isPending && <div className="laod"> Loading... </div>}
			{blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
			{/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title= "Mario's Blogs" /> */}
		</div>
	);
}

export default HomePage;