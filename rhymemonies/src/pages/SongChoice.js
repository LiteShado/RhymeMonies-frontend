import {useEffect, useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import {useParams, useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'


const SongChoice = (props) => {
    const [song, setSong] = useState({})

    const fetchSong = () => {
        axios.get(`${env.API_URL}/songs/${props.id}`).then((response) => {
            setSong(response.data)
        })
    }

    useEffect(fetchSong, [])

    return (
        <div>
        {/* <h1>Created by Members of the Community!</h1>
            <div>Title: {song.title}</div>
            <div>Genre: {song.genre}</div>
            <Link to={`/songs/${params.id}/lyrics`}>View Lyrics</Link> */}
        </div>
    )
}
export default SongChoice
