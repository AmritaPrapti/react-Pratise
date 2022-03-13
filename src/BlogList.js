import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "./icon-delete";

const BlogList = ({blogs}) => {
	const [blogData, setBlogData] = useState(blogs)
	const navigate = useNavigate();
	
	
	const handleDelete = (id) => {
	
		fetch('http://localhost:8000/blogs/' + id , { 
			method: 'DELETE'
		}).then((res) => {
			// console.log(res)
			navigate('/');
			fetch('http://localhost:8000/blogs')
			.then(response => response.json())
			.then(response => setBlogData(response))	
		})
	}
	return (
		<div className="blogs">
			{blogData.map(({title,author,id}) => (
				<div className="blogs__content" key={id}>
					<div className="blog__col">
						<Link to={`/blogs/${id}`} className="text--links"><h4 className="title title--blog">{title}</h4></Link>
					
						<p className="text--blog">- Written by {author}</p>
					</div>
					<div className="blog__col">
						<button className="btn btn--delete" onClick={() => handleDelete(id)} ><DeleteIcon /></button>
					</div>
				</div>
			))}

			{/* <div>{blog}</div> */}
		</div>
	);
}

export default BlogList;