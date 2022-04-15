import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import Create from "./pages/Create";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Index</Link> &nbsp; | &nbsp;
        <Link to="/create">Add New Entry</Link>
      </nav>
      <br/>
      <h1>Blog City</h1>
      <br/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/:id/edit" element={<Edit />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}