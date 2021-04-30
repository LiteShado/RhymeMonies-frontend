import {useContext} from 'react'
import {Link} from 'react-router-dom'
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
        <ul>
        {user ?
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
                    My Songs
                </Link>
            </li>
            <li  onClick={() => logout()}><Link className="navLink" to="/login">Logout</Link>
            </li>
        </>
        :
        <>
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
        </> }
        </ul>
    )
}

export default Navbar
