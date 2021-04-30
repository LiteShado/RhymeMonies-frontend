import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
import {Link} from 'react-router-dom'
// import '../css/Music.css'

const Songs = () => {
    const[allTheSongs,setAllTheSongs] = useState(null)
    const getAllTheSongs = async() => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/songs`,
            setAllTheSongs(res.data.songs)
            )} catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getAllTheSongs()
    },[])

    return (
        <>
        <h1>Check Out These Songs from the Community!</h1>
        {allTheSongs && allTheSongs.map((song, i) =>
            <Songs
                song = {song}
                key={song.id}
                preview = "true"
            />
        )}
        </>
    )
}
export default Songs
