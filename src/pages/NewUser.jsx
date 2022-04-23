import { useNavigate } from "react-router-dom";
import { createUser } from "../services/APIFunctions";

export default function NewUser() {
    const navigate = useNavigate();

    const createNewUser = e => {
        e.preventDefault();
        const newUser = {
            name: e.target.username.value,
            password: e.target.password.value
        };
        createUser(newUser);
        navigate("/");
    };

    return (
        <div className="newUser">
            <h3>New User:</h3>
            <form onSubmit={createNewUser}>
                Username: <input type="text" name="username" /> <br/>
                Password: <input type="text" name="password" /> <br/>
                <input type="submit" />
            </form>
        </div>
    );
}