import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import NewUser from './pages/NewUser';
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Index</Link> &nbsp; | &nbsp; 
        <Link to="/create">Add New Entry</Link> &nbsp; | &nbsp; 
        <Link to="/login">Login</Link> &nbsp; | &nbsp; 
        <Link to="/newuser">New User?</Link>
      </nav>
      <br/>
      <h1>Blog City</h1>
      <br/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/:id/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}