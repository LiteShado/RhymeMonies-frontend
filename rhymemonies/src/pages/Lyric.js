import {useEffect, useState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
import {Link} from 'react-router-dom'
// import '../css/Music.css'
import env from 'react-dotenv'
import { useParams, Redirect } from 'react-router-dom'

const Lyric = () => {

//     const[allLyric,setAllLyric] = useState({})

//     const params = useParams()
//     const history = useHistory()
//     const [shouldRedirect, setShouldRedirect] =
//     useState(null)

//     const getAllLyric = () => {

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
