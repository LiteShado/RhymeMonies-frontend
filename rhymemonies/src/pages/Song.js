import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
import {Link} from 'react-router-dom'
// import '../css/Music.css'

const Songs = () => {

    const[allTheSongs,setAllTheSongs] = useState([])

    const getAllTheSongs = () => {

             axios.get(`${process.env.REACT_APP_BACKEND_URL}/songs`).then((response) => {
                setAllTheSongs(response.data)
            })
    }

    useEffect(getAllTheSongs, [])

    return (
        <div>
        <h1>Check Out These from the Community!</h1>
        <ul>
        {allTheSongs.map((song) => {
            return (
                <li key={song.id}>
                    <Link to={`/songs/${song.id}`}>{song.title}</Link>
                </li>
            )
            })}
        </ul>
        </div>
    )
}
export default Songs
