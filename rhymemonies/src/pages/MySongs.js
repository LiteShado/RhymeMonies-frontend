import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
import SongChoice from '../pages/SongChoice'
import { Link } from 'react-router-dom'


const MySongs = () => {

    // const[allSongs, setAllSongs] = useState(null)

    const[allUserSongs, setAllUserSongs] = useState(null)
    const userId = localStorage.getItem('userId')


    const getAllSongs = async() => {
            try {
            const res = await axios.get(`${env.API_URL}/songs`)
            console.log(res)
            // setAllSongs(res.data)
            setAllUserSongs(() =>
            res.data)
            console.log(res.data)
            console.log(userId)
            } catch (error) {
            console.log(error)

            }


    }

    // useEffect(() => {
    //     getAllSongs()
    // },[])

    // const filter = () => {
    //     let filtered = allUserSongs.filter(() => {
    //         return allUserSongs.includes(userId)
    //     })
    // }

    // useEffect(() => {
    //     filter(filtered)
    // }, [filtered]
    // )
    return (
        <>
        <h1>Here Are Your Songs!!</h1>
        <h3>Title | Genre</h3>

        {allUserSongs && allUserSongs.map((res, i) => {
            console.log(allUserSongs[i].userId)
            console.log(userId)
            if (allUserSongs[i].userId !==userId) {
                return null;
            }


        // {allUserSongs.filter(allUserSongs[i] => allUserSongs[i].userId===userId) && allUserSongs.map((res, i) => {
        // console.log(allUserSongs[i].userId)
        // console.log(allUserSongs)
        // console.log([i])
        return (
            <li key={allUserSongs.id}>
                <Link to={`/songs/${allUserSongs.id}`} className="userSongs">
                <SongChoice
                key={allUserSongs.id}
                song={allUserSongs.title}
                userId={allUserSongs.userId}
                preview="true"
                placeholder={allUserSongs.title}
                />
                {allUserSongs.title} | {allUserSongs.genre}</Link>

            </li>

            )
        }
        )

    }
        </>
    )
}

export default MySongs
