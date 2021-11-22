import './App.css';
import { Button } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom';
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <Link to="/Users_list" >
        <Button variant="outline-primary button">Contact List</Button>
      </Link>
      <Link to="/Add_User">
        <Button variant="primary button">Add Contact</Button>
      </Link>

      <Routes>
        <Route path="/Users_list" element={<UserCard />} />
        <Route path="/Add_User" element={<AddUser />} />
      </Routes>

    </div>
  );
}

export default App;
