import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
import SongChoice from '../pages/SongChoice'
import { Link, useParams } from 'react-router-dom'


const Songs = () => {

    const[allSongs, setAllSongs] = useState(null)


    const getUserSongs = async() => {
            try {
            const res = await axios.get(`${env.API_URL}/songs/user`)
            console.log(res.data)
            setAllSongs(res.data)

            } catch (error) {
                console.log(error)
            }
    }

    useEffect(() => {
        getUserSongs()
    },[])

    return (
        <>
        <h1>Your Song Catalog</h1>
        {/* <h3>Title | Genre</h3> */}
        {allSongs && allSongs.map((res, i) => {
            console.log(res)
        return (
            <li key={res.id}>
                <Link to={`/songs/${res.id}`} className="userSongs">
                <SongChoice
                key={res.id}
                song={res}
                // userId={res.userId}
                // userId={res.userId}
                // preview="true"
                // placeholder={res.title}
                />
                {res.title} | {res.genre}
                </Link>
            </li>

            )})
        }
        </>
    )
}
export default Songs
