import {useEffect, useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import {Link} from 'react-router-dom'


const SongChoice = (props) => {
    const [song, setSong] = useState({})
    console.log(props)

    const fetchSong = async() => {
        const response = await axios.get(`${env.API_URL}/songs/${props.song.id}`)
        console.log(props)
        setSong(response.data.song)
        console.log(response.data.song)
        }

        useEffect(() => {
            fetchSong()
        }, [])

        console.log(song)
        // console.log(props)

    return (
        <div>
        {/* <h1>Created by Members of the Community!</h1> */}

            {/* <div>Title: {song.title}</div>
            <div>Genre: {song.genre}</div> */}
            <Link to={`/lyrics/${props.song.id}`} className="viewLyrics">View Lyrics</Link>
        </div>
    )
}
export default SongChoice
