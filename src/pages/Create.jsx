import { useNavigate } from "react-router-dom";
import { createItem } from "../services/APIFunctions";

export default function Create() {
    const navigate = useNavigate();

    const createBlog = e => {
        e.preventDefault();
        const newBlog = {
            title: e.target.title.value,
            body: e.target.body.value
        };
        createItem(newBlog);
        navigate("/");
    };

    return (
        <div className="main">
            <h2>Add a New Blog</h2>
            <form onSubmit={createBlog}>
                Title: <input type="text" name="title" /> <br/>
                <br/>
                <textarea name="body" cols="100" rows="25"></textarea> <br/>
                <input type="submit" />
            </form>
        </div>
    );
}