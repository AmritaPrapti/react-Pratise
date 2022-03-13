import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "./icon-delete";
const BlogList = ({blogs}) => {
	// const blogs = props.blogs;
	const navigate = useNavigate();
	
	
	const handleClick = (id) => {
	
		fetch('http://localhost:8000/blogs/' + id , { 
			method: 'DELETE'
		}).then((res) => {
			console.log(res)
			navigate('/');
		})
	}
	return (
		<div className="blogs">
			{blogs.map(({title,author,id}) => (
				<div className="blogs__content" key={id}>
					<div className="blog__col">
						<Link to={`/blogs/${id}`} className="text--links"><h4 className="title title--blog">{title}</h4></Link>
					
						<p className="text--blog">- Written by {author}</p>
					</div>
					<div className="blog__col">
						<button className="btn btn--delete" onClick={() => handleClick(id)} ><DeleteIcon /></button>
					</div>
				</div>
			))}
		</div>
	);
}

export default BlogList;