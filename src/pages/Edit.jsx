import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItem, editItem, deleteItem } from "../services/APIFunctions";

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        getItem(id)
        .then(res => setBlog(res.data))
    }, []);

    const editBlog = e => {
        e.preventDefault()
        const updatedBlog = {
            title: e.target.title.value,
            body: e.target.body.value,
            comments: blog.comments
        };
        editItem(id, updatedBlog);
        navigate(`/${id}`);
    };

    const goBack = () => {
        navigate(`/${id}`);
    };

    const deleteBlog = () => {
        deleteItem(id);
        navigate("/");
    };

    return (
        <div className="editContainer">
            <h1>Edit Blog</h1>
            <form onSubmit={editBlog}>
                Title: <input type ="text" name="title" defaultValue={blog.title} /> <br/>
                <textarea name="body" cols="80" rows="20" defaultValue={blog.body}></textarea> <br/>
                <input type="submit" />
            </form>
            <br/>
            <button type="submit" onClick={goBack}>Go Back</button>
            <br/>
            <br/>
            <br/>
            <button type ="submit" onClick={deleteBlog}>Delete Blog?</button>
        </div>
    );
}