import axios from "axios"
import { GET_USERS, GET_USER, TOGGLE_TRUE, TOGGLE_FALSE } from "../constants/actionsType"

export const getUsers = () => (dispatch) => {
    axios.get("/api/users")
        .then(res => dispatch({ type: GET_USERS, payload: res.data }))
        .catch(err => console.log(err))
}

export const getUser = (id) => (dispatch) => {
    axios.get(`/api/users/${id}`)
        .then(res => dispatch({ type: GET_USER, payload: res.data }))
        .catch(err => console.log(err))
}

export const addUser = (newUser) => (dispatch) => {
    axios.post('/api/users', newUser)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}

export const deleteUser = (id) => (dispatch) => {
    axios.delete(`/api/users/${id}`)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}
export const editUser = (id, editUser) => (dispatch) => {
    axios.put(`/api/users/${id}`, editUser)
        .then(() => dispatch(getUsers()))
        .catch(err => console.log(err))
}

export const toggleTrue = () => {
    return {
        type: TOGGLE_TRUE
    }
}
export const toggleFalse = () => {
    return {
        type: TOGGLE_FALSE
    }
}