import {useEffect, useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'


const Lyric = (props) => {

    const {userState} = useContext(UserContext)
    const [song,setSong] = userState
    const [testLyric,setTestLyric] = useState('')



    const [lyric,setLyric] = useState(null)
    const [userId,setUserId] = useState('')
    const [songId,setSongId] = useState('')
    console.log(props.match.params.id)
    console.log(props)

    const [lyrics, setLyrics] = useState('')

    const get = async() => {
        try {

        const lyric = await axios.get(`${env.API_URL}/lyrics/${props.match.params.id}`)

        console.log(lyric)

        let i

        const array = lyric.data.lyrics
        setLyric(array)
        console.log(array)


        for (i = 0; i<array.length; i++) {
            console.log(array[i].lyric)
            // setLyric(array[i].lyric)
            console.log(lyric)
        }

        console.log(array)


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        get()
    }, [])


    const signupSubmit = async (e) => {
        // e.preventDefault()
        // let user = localStorage.getItem('userId')
        let id = localStorage.getItem('userId')
        let idd = props.match.params.id


        console.log(id)
        console.log(idd)


        console.log(get)

        let res = await axios.post(`${env.API_URL}/lyrics/${props.match.params.id}`, {
            lyric: testLyric,
            userId: id,
            songId: idd
        })
        console.log(res)
        // localStorage.setItem('lyric', res.data.song.lyric)

        setSong(res.data.song)
    }

    return (
        <>
                <h1>Check Out These Lyrics!!</h1>
            <>

                {lyric && lyric.map((res, i) => {
                    console.log(lyrics)

                return (
                    <li className="lyricList" key={res.id}>
                        {res.lyric}
                    </li>
                )
                })}
            </>


                <h1>Add Your Lyrics To The Song!</h1>
                <form onSubmit={signupSubmit}>
                    <input name="lyric" type="text" value={testLyric} onChange={(e) => setTestLyric(e.target.value)} />

                    <input name="userId" type="hidden" placeholder="UserId" value={userId} onChange={(e) => setUserId(e.target.value)} />

                    <input name="songId" type="hidden" placeholder="SongId" value={songId} onChange={(e) => setUserId(e.target.value)} />

                    <input type="submit" value="submit" />
                </form>

        </>
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
