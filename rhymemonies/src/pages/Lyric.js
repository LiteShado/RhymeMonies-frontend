import {useEffect, useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
import { useParams, Redirect, Link } from 'react-router-dom'

const Lyric = (props) => {

    const {userState} = useContext(UserContext)
    const [song,setSong] = userState

    const [lyric,setLyric] = useState('')
    const [userId,setUserId] = useState('')
    const [songId,setSongId] = useState('')
    console.log(props.match.params.id)
    console.log(props)

    const get = async() => {
        try {

        const lyric = await axios.get(`${env.API_URL}/lyrics/${props.match.params.id}`)

        let i

        const array = lyric.data.lyrics
        for (i =0; i<array.length; i++) {
            console.log(array[i].lyric)
        }

        console.log(array)


        } catch (error) {
            console.log(error)
        }
    }
    get()


    const signupSubmit = async (e) => {
        e.preventDefault()
        // let user = localStorage.getItem('userId')
        let id = localStorage.getItem('userId')
        let idd = props.match.params.id
        console.log(id)
        console.log(idd)


        console.log(get)

        let res = await axios.post(`${env.API_URL}/lyrics/${props.match.params.id}`, {
            lyric: lyric,
            userId: id,
            songId: idd
        })
        console.log(res)
        // localStorage.setItem('lyric', res.data.song.lyric)

        setSong(res.data.song)
    }

    return (
        <div>
            <div className="newLyricContainer">
                <h1>Add Your Lyrics To The Song!</h1>
                <form onSubmit={signupSubmit}>
                    <textarea name="lyric" type="text" placeholder="Lyrics" value={lyric} onChange={(e) => setLyric(e.target.value)} />

                    <input name="userId" type="hidden" placeholder="UserId" value={userId} onChange={(e) => setUserId(e.target.value)} />

                    <input name="songId" type="hidden" placeholder="SongId" value={songId} onChange={(e) => setUserId(e.target.value)} />

                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )


//         axios.get(`${env.API_URL}/songs/${params.id}/lyrics`).then((response) => {
//            console.log(response)
//            setAllLyric(response.data)
//        })
// }
//     useEffect(getAllLyric, [])

//     const [lyric, setLyric] = useState({
//         lyric: ''
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setLyric({
//             ...lyric,
//             [name]: value
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios.post(`${env.API_URL}/songs/${params.id}/lyrics`, lyric).then((response) => {
//             console.log(response);
//         })
//         setShouldRedirect(response.data.id)
//         }

// const [lyric, setLyric] = useState({})



        // return (
            // <div>
            // <h1>Here Are the Lyrics</h1>
            // <ul>
            //     <div>
            //         {allLyric.map((lyric) => {
            //             return (
            //             <div>
            //                 <li key={lyric.id}>
            //                     <Link to={`/songs/${params.id}/lyrics`}>{lyric.lyric}</Link>
            //                 </li>
            //                     <Link to={`/songs/${params.id}/lyrics`}>View Lyrics</Link>

            //             </div>
            //             )
            //             })}
            //             </div>
                // <h1>Add Your Lyrics:</h1>
                //     <form onSubmit={handleSubmit}>
                //         <div>
                //             <label htmlFor="new-lyric">Lyrics:</label>
                //             <input type="text" placeholder="lyrics" name="lyric" value={lyric.lyric} onChange={handleChange}
                //             />
                //         </div>

                //     <input type="submit" value="submit" />

                //     </form>
       // </ul>
            // </div>
//         )

}
export default Lyric
