import {useEffect, useState, useContext} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
// import SongChoice from '../pages/SongChoice'
import { Link } from 'react-router-dom'
import {UserContext} from '../context/UserContext'

const MySongs = (props) => {

    console.log(props)

    const {userState} = useContext(UserContext)
    const[allSongs, setAllSongs] = useState(null)


    const getAllSongs = async() => {
        try {
            const res = await axios.get(`${env.API_URL}/songs/user`)
            console.log(res)

            let i

            const array = res.data

            setAllSongs(array)
            console.log(array)

            for (i = 0; i<array.length; i++) {
                console.log(array[i].res)
                // setLyric(array[i].lyric)
                console.log(res)
            }

            } catch (error) {
            console.log(error)
            }
    }

    useEffect(() => {
        getAllSongs()
    },[])

    return (
        <div className="mySongs">
        <h1>Here Are Your Songs!!</h1>

        {allSongs && allSongs.map((res, i) => {
            console.log(res)
        return (
            <li key={res.id}>
                <Link to={`/songs/${res.id}`}
                className="userSongs">
                {/* <SongChoice
                key={res.id}
                song={res.title}
                // userId={allUserSongs.userId}
                // preview="true"
                // placeholder={allUserSongs.title}
                />
                {allSongs.title} | {allSongs.genre}</Link> */}
            </Link>
            </li>
        )

        })}

        </div>
    )

}



export default MySongs
