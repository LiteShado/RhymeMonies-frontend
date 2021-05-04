import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
import SongChoice from '../pages/SongChoice'
import { Link } from 'react-router-dom'


const MySongs = () => {

    // const[allSongs, setAllSongs] = useState(null)
    // const userId = localStorage.getItem('userId', userId)

    const[allSongs, setAllSongs] = useState(null)

    // const id = localStorage.getItem('userId', userId)

    const getAllSongs = async() => {
        try {
            const res = await axios.get(`${env.API_URL}/users/songs`)
            console.log(res)
            setAllSongs(res.data)
            console.log(res.data)

            } catch (error) {
            console.log(error)
            }
    }

    useEffect(() => {
        getAllSongs()
    },[])

    return (
        <>
        <h1>Here Are Your Songs!!</h1>

        {allSongs && allSongs.map((res, i) => {
            console.log(res)
        return (
            <li key={res.id}>
                <Link to={`/songs/${res.id}`}
                className="userSongs">
                <SongChoice
                key={res.id}
                song={res.title}
                // userId={allUserSongs.userId}
                // preview="true"
                // placeholder={allUserSongs.title}
                />
                {allSongs.title} | {allSongs.genre}</Link>

            </li>

            )})
        }
        </>
    )

}



export default MySongs
