import {useEffect, useState} from 'react'
import axios from 'axios'
=import env from 'react-dotenv'
import {useParams, useHistory} from 'react-router-dom'

const SongChoice = () => {

    const[allSongs,setAllSongs] = useState({})
    const params = useParams()
    const history = useHistory()


    const getAllSongs = () => {

             axios.get(`${env.API_URL}/${params.id}`).then((response) => {
                console.log(response)
                setAllSongs(response.data)
            })
    }

    useEffect(getAllSongs, [])

    return (
        <div>
        <h1>Created by Members of the Community!</h1>
            <div>Title: {song.title}</div>
            <div>Genre: {song.genre}</div>
            <button onClick={() => {
                    axios.get(`${env.API_URL}/songs/${params.id}/lyrics`)
                }}>View Lyrics</button>
            <button onClick={() => {
                    axios.post(`${env.API_URL}/songs/${params.id}/lyrics`)
                }}>Add Lyrics</button>
        </div>
    )
}
export default SongChoice
