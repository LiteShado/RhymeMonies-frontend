import {useEffect, useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'
// import {useParams} from 'react-router-dom'
// import {Link} from 'react-router-dom'

const SongChoice = (props) => {
    const [song, setSong] = useState({})
    // const params = useParams()

    console.log(props)

    const fetchSong = async() => {
        const response = await axios.get(`${env.API_URL}/songs/${props.song.id}`)
        console.log(props.song.id)
        // console.log(props.song.id)
        // console.log(params.id)
        console.log(response)
        setSong(response.data.song)
        console.log(response.data.song)
        }

    useEffect(() => {
        fetchSong()
    }, [])

    return (
        <div>
        {/* <h1>Created by Members of the Community!</h1> */}
            <div>Title: {song.title}</div>
            <div>Genre: {song.genre}</div>
            {/* <Link to={`/songs/${props.id}/lyrics`}>View Lyrics</Link> */}
        </div>
    )
}
export default SongChoice
