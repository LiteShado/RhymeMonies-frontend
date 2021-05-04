import {useEffect, useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { localStorage } from 'use-local-storage'

const SongChoice = (props) => {
    const [song, setSong] = useState({})
    // const params = useParams()
    console.log(props.song.id)



    const fetchSong = async() => {
        const response = await axios.get(`${env.API_URL}/songs/${props.song.id}`)
        console.log(props)
        // console.log(props.song.id)
        // console.log(params.id)
        setSong(response.data.song)
        console.log(response.data.song)
        }

        // localStorage.setItem('title', response.data.song.title);        localStorage.setItem('genre', response.data.song.genre);

        useEffect(() => {
            fetchSong()
        }, [])

        console.log(song)

    return (
        <div>
        {/* <h1>Created by Members of the Community!</h1> */}

            <div>Title: {song.title}</div>
            <div>Genre: {song.genre}</div>
            <Link to={`/lyrics/${props.song.id}`}>View Lyrics</Link>
        </div>
    )
}
export default SongChoice
