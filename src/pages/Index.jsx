import { useState, useEffect } from "react"
import { getIndex } from "../services/APIFunctions"

export default function Index() {

    const [blog, setBlog] = useState([]);

    useEffect(() => {
        getIndex()
        .then(res => setBlog(res.data))
    }, [blog]);

    return (
        <div className="main">
            <h2>Blog Index</h2>
            <div className="blogsContainer">
                {blog.map((each, i) => {
                    return(
                        <div className="blogsDisplay" key={i}>
                            <br/>
                            <h3><a href={`/${each._id}`}>{each.title}</a></h3>
                            <p>{each.body}</p>
                            <br/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}