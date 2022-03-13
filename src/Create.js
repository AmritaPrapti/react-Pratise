import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [author , setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        // console.log(blog);
        setIsPending(true);

        fetch('http://localhost:8000/blogs', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(res => {
            console.log(res)
            setIsPending(false);
            navigate('/');
        })
    }

    return ( 
        <div className="create">
            <h2 className="title  title--page">Add a new Blog</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label className="form__label">Blog Name:</label>
                <input 
                className="form__input" 
                type="text" name="" id=""
                value={title} 
                onChange= {(e) => setTitle(e.target.value)}
                required/>
                <label className="form__label">Blog Body:</label>
                <textarea className="form__input"
                 name="" id="" cols="30" rows="10"
                 value={body}
                 onChange={(e) => setBody(e.target.value)}
                 required
                />
                <label className="form__label">Author: </label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="form__select"
                >
                    <option value="Mario">Mario</option>
                    <option value="Pario">Pario</option>
                    <option value="Sario">Sario</option>
                    <option value="Tario">Tario</option>
                </select>
               <div>
                   {!isPending && <button className="btn btn--primary" >Add Blog</button>}
                   {isPending && <button className="btn btn--primary" >Adding Blog ...</button>}
               </div>
               
            </form>
        </div>
     );
}
 
export default Create;