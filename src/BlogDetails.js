import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
const BLogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    return ( 
    <div className="dblog">
        {isPending && <div> Loading... </div>}
        {error && <div>{error}</div>}
        {blog && (
            <article className="article">
                <h4 className="title title--page">{blog.title}</h4>
                <p className="text--blog"> {blog.body}</p>
                <p className="text text--blog">- Written by {blog.author}</p>
            </article>
        )}
    </div> );
}
 
export default BLogDetails;