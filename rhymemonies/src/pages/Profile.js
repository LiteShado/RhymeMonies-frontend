import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
import SongChoice from '../pages/SongChoice'
import { Link, useParams } from 'react-router-dom'


const Profile = (props) => {

    const[profile, setProfile] = useState(null)


    const getProfile = async() => {
            try {
            const response = await axios.get(`${env.API_URL}/users/profile`)
            setProfile(response.data)
            console.log(response.data)
            console.log(props.song.id)
            // console.log(props.song.id)
            console.log(response.data.song)
            console.log(response)
            setProfile(response.data.song)
            console.log(response.data.song)

            } catch (error) {
                console.log(error)
            }
    }

    useEffect(() => {
        getProfile()
    },[])

    return (
        <>
        <h1>Your Profile Details:</h1>
        {profile((res) => {
            return (
                <li key={res.id}>
                    <Link to={`/users/${res.id}`} className="profile">
                    <Profile
                    key={res.id}
                    name={res.name}
                    // userId={res.userId}
                    // preview="true"
                    // placeholder={res.title}
                    />
                    </Link>
                </li>
            )
        })}
        </>

    )
}
export default Profile
