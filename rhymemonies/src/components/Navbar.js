import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul>
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
        </ul>
    )
}

export default Navbar
