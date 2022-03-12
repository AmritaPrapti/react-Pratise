import DeleteIcon from "./icon-delete";
const BlogList = ({blogs , deleteBlog}) => {
	// const blogs = props.blogs;
	return (
		<div className="blogs">
			{blogs.map((blog) => (
				<div className="blogs__content" key={blog.id}>
					<div className="blog__col">
						<h4 className="title title--blog">{blog.title}</h4>
						<p className="text-blog">{blog.body}</p>
					</div>
					<div className="blog__col">
						<button className="btn btn--delete" onClick={() => deleteBlog(blog.id)}><DeleteIcon /></button>
					</div>
				</div>
			))}
		</div>
	);
}

export default BlogList;