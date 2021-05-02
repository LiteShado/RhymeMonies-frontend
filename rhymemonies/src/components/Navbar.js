import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import '../css/Navbar.css'

const Navbar = () => {
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState

    const logout = () => {
        localStorage.clear()
        setUser(null)
    }
    return (
       <div>
    <ul>
        {user.id ?
        <>
            <li>
                <Link
                to="/songs">
                    Songs
                </Link>
            </li>
            <li>
                <Link
                to="/songs/new">
                    Add Song to Community
                </Link>
            </li>
            <li>
                <Link
                to="/songs/:id">
                    A Song Choice
                </Link>
            <li>
            <li>
                <Link
                to="/users/songs">
                    My Songs
                </Link>
            <li>
                <Link
                to="/users/edit">
                    My Profile
                </Link>
            </li>
            <li  onClick={() => logout()}>
                <Link className="navLink" to="/login">
                    Logout
                    </Link>
            </li>
        </>
        :
        <>
            <li>
                <Link
                to="/">
                    Home
                </Link>
            </li>

            <li>
                <Link
                to="/users">
                    Login
                </Link>
            </li>
            <li>
                <Link
                to="/users/new">
                    Signup
                </Link>
            </li>
        </>
        }
        </ul>
        </div>
    )
}

export default Navbar
