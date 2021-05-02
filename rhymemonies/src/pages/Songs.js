import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
import {Link} from 'react-router-dom'
// import '../css/Music.css'
import env from 'react-dotenv'
import {useParams} from 'react-router-dom'


const Songs = () => {

    const[allSongs,setAllSongs] = useState({})
    const params = useParams()


    const getAllSongs = () => {

             axios.get(`${env.API_URL}/songs`).then((response) => {
                console.log(response)
                setAllSongs(response.data)
            })
    }

    useEffect(getAllSongs, [])

    return (
        <div>
        <h1>Check Out These from the Community!</h1>
        <ul>
        {allSongs.map((song) => {
            return (
                <div>
                <li key={song.id}>
                    <Link to={`/songs/${song.id}`}>{song.title}</Link>
                </li>
                <button onClick={() => {
                    axios.get(`${env.API_URL}/songs/${params.id}`)
                }}>View Song</button>
                <button onClick={() => {
                    axios.get(`${env.API_URL}/songs/${params.id}/lyrics`)
                }}>Add Lyrics</button>
                </div>
            )
            })}
        </ul>
        </div>
    )
}
export default Songs
