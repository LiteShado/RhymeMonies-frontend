import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
import {Link} from 'react-router-dom'
// import '../css/Music.css'
import env from 'react-dotenv'
import { useParams, Redirect } from 'react-router-dom'

const Profile = () => {

//     const[profile,setProfile] = useState({})

//     const params = useParams()
//     const history = useHistory()
//     const [shouldRedirect, setShouldRedirect] =
//     useState(null)

//     const getProfile = () => {

//         axios.get(`${env.API_URL}/users/profile`).then((response) => {
//            console.log(response)
//            setProfile(response.data)
//        })
// }
//     useEffect(getProfile, [])

//     // const [profil, setLyric] = useState({
//     //     lyric: ''
//     // })

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setProfile({
//             ...user,
//             [name]: value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.put(`${env.API_URL}/users/edit`, user).then((response) => {
//             console.log(response);
//         })
//         Redirect()
//         }



    return (
        <div>
            {/* { shouldRedirect &&
            <Redirect to={`/users/profile`} /> }
            <h1>Your Profile</h1>
                    <ul key={user.id}>
                        <li to={`/users/profile`}>{user.name}</li>
                        <li to={`/users/profile`}>{user.email}</li>
                        <li to={`/users/profile`}>{user.password}</li>
                    </ul>

            <h1>Edit Your Profile:</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="new-lyric">Lyrics:</label>
                        <input type="text" placeholder="lyrics" name="lyric" value={lyric.lyric} onChange={handleChange}
                                />
                        </div>

                        <div>
                            <input type="submit" value="submit" />
                        </div>

                    </form> */}

        </div>
        )
}

export default Profile
