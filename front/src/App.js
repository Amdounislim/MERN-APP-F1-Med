import React, { useEffect } from "react"
import './App.css';
import { Button } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom';
import UserCard from './components/UserCard';
import AddUser from './components/AddUser';
import { useSelector, useDispatch } from "react-redux"
import { getUsers, toggleFalse } from './JS/actions/actionUser';

function App() {

  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  const getAllUsers = () => {
    dispatch(getUsers())
  }

  useEffect(() => {
    getAllUsers()
  }, [])



  return (
    <div className="App">
      <Link to="/Users_list" >
        <Button variant="outline-primary button">Contact List</Button>
      </Link>
      <Link to="/Add_User">
        <Button variant="primary button" onClick={() => dispatch(toggleFalse())} >Add Contact</Button>
      </Link>

      <Routes>
        <Route path="/Users_list" element={<div className="contact-list">
          {users.map((el, i) => <UserCard user={el} key={el._id} />)}
        </div>}
        />
        <Route path="/Add_User" element={<AddUser />} />
        <Route path="/Edit_User" element={<AddUser />} />
      </Routes>
      {console.log(users)}
    </div>
  );
}

export default App;
