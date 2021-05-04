import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserContext'
import '../css/Navbar.css'



const Navbar = (props) => {
    const {userState} = useContext(UserContext)
    const[userId,setUserId] = userState

    const logout = () => {
        localStorage.clear()
        setUserId(null)
        window.location.reload();
    }

    console.log(props)

    return (
        <ul>
            {/* <li ><Link className="navLink" to="/">Home</Link></li> */}
            {userId ?
            <>
            <li ><Link className="navLink" to="/songs">Songs</Link></li>
            <li ><Link className="navLink" to="/songs/new">Add Song To Community</Link></li>
            <li ><Link className="navLink" to="/users/songs">My Songs</Link></li>
            <li ><Link className="navLink" to="/users/edit">My Profile</Link></li>
            <li  onClick={() => logout()}><Link className="navLink" to="/">Logout</Link></li>
            </>
            :
            <>
            <li ><Link className="navLink" to="/">Home</Link></li>
            <li ><Link className="navLink" to="/users">Login</Link></li>
            <li ><Link className="navLink" to="/users/new">Signup</Link></li>

            </> }
        </ul>
    )
}

export default Navbar
