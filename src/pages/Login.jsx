import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/APIFunctions";

export default function Login() {
    const navigate = useNavigate();

    const login = e => {
        e.preventDefault();
        const loginUser = {
            name: e.target.username.value,
            password: e.target.password.value
        };
        userLogin(loginUser);
        navigate("/");
    }

    return (
        <div className="newUser">
            <h3>Login:</h3>
            <form onSubmit={login}>
                Username: <input type="text" name="username" /> <br/>
                Password: <input type="text" name="password" /> <br/>
                <input type="submit" />
            </form>
        </div>
    );
}