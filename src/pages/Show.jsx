import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItem, editItem } from "../services/APIFunctions";

export default function Show() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getItem(id)
        .then(res => {
            setBlog(res.data);
            setComments(res.data.comments);
        });
    }, [blog]);

    const goBack = () => {
        navigate(`/`);
    };

    const addComment = e => {
        e.preventDefault()
        const newComment = comments
        newComment.push({
            name: e.target.name.value,
            message: e.target.message.value
        });
        const currentBlog = {
            title: blog.title,
            body: blog.body,
            comments: newComment
        };
        editItem(id, currentBlog);
        e.target.name.value = null;
        e.target.message.value = null;
    };

    return (
        <div className="blogContainer">
            <div className="showBlog">
                <h3>{blog.title}</h3>
                <div className="blogContent">
                    <p>{blog.body}</p>
                </div>                
            </div>
            <br/>
            <div id="backButton">
                <button type="submit" onClick={goBack}>Go Back</button>
            </div>
            <div id="editButton">
                <button onClick={() => navigate(`/${id}/edit`)}>Edit Blog</button>
            </div>
            <br/>
            <br/>
            <div className="commentsContainer">
                {comments.map((each, i) => {
                    return (
                        <div className="commentsDisplay" key={i}>
                            <h5>Commenter: {each.name}</h5>
                            <p style={{fontSize: "small"}}>Comment: {each.message}</p>
                            <br/>
                        </div>
                    );
                })}
                <form onSubmit={addComment} className="commentForm">
                    <h4>Add a comment:</h4>
                    Name: <input type="text" name="name" /> <br/>
                    <br/>
                    Comment: <textarea name="message" cols="80" rows="10"></textarea> <br/>
                    <input type="submit" id="commentButton"/>
                </form>
            </div>
        </div>
    );
}