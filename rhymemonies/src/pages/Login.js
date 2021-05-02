import {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
import '../css/Login.css'
import env from 'react-dotenv'

const Login = () => {
    const {userState} = useContext(UserContext)
    const [user,setUser] = userState

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const loginSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post(`${env.API_URL}/users`, {
            email: email,
            password: password
        })
        console.log(res)
        console.log(user)
        localStorage.setItem('userId', res.data.user.id)
        setUser(res.data.user)
    }

    return (
        <div>
            <div className="loginContainer">
                <h1>Login</h1>
                <form onSubmit={loginSubmit}>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}

export default Login
