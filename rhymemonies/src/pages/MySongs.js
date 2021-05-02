import {useEffect, useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'
import {useParams, useHistory} from 'react-router-dom'

const MySongs = () => {

    // const[allSongs,setAllSongs] = useState({})
    // const params = useParams()
    // const history = useHistory()


    // const getAllSongs = () => {

    //          axios.get(`${env.API_URL}/${params.id}`).then((response) => {
    //             console.log(response)
    //             setAllSongs(response.data)
    //         })
    // }

    // useEffect(getAllSongs, [])

    return (
        <div>
        <h1>Your MasterPiece List</h1>
            {/* <div>Title: {song.title}</div>
            <div>Genre: {song.genre}</div>
            <div>Lyrics: {song.lyric}</div>
            <button onClick={() => {
                    axios.delete(`${env.API_URL}/songs/${params.id}`).then(() => {
                            history.push('/songs')
                        })
                }}
                >Delete Song</button> */}
        </div>
    )
}
export default MySongs
