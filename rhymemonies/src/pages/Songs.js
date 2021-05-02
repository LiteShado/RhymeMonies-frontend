import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
import SongChoice from '../pages/SongChoice'
import { Link } from 'react-router-dom'


const Songs = () => {

    const[allSongs, setAllSongs] = useState(null)

    const getAllSongs = async() => {
            try {
            const res = await axios.get(`${env.API_URL}/songs`)
            setAllSongs(res.data)
            console.log(res.data)
            } catch (error) {
                console.log(error)
            }
    }

    useEffect(() => {
        getAllSongs()
    },[])

    return (
        <>
        <h1>Check Out These from the Community!</h1>
        <h3>Title | Genre</h3>
        {allSongs && allSongs.map((res, i) =>
        <Link to= "/songs" className="communitySongs">
            <li>
                <SongChoice
                key={res.id}
                song={res}
                preview="true"
                placeholder={res.title}
                />{res.title} | {res.genre}
                </li>
        </Link>
            )}
        </>
    )
}
export default Songs
