import {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
import '../css/Login.css'
import env from 'react-dotenv'

const New = (props) => {
    const {userState} = useContext(UserContext)
    const [song,setSong] = userState

    const [title,setTitle] = useState('')
    const [genre,setGenre] = useState('')
    const [userId, setUserId] = useState('')

    const newSong = async (e) => {
        e.preventDefault()
        // let user = localStorage.getItem('userId')
        let userId = localStorage.getItem('userId')
        console.log(userId)

        let res = await axios.post(`${env.API_URL}/songs/new`, {
            title: title,
            genre: genre,
            id: userId
        })
        console.log(res)
        localStorage.setItem('title', res.data.song.title)
        localStorage.setItem('genre', res.data.song.genre)

        setSong(res.data.song)
        // localStorage.setItem('userId', res.data.user.id)
    }

    return (
            <div className="newSongContainer">
                <h1>Add Your Song to the Community!</h1>
                <form onSubmit={newSong}>
                    <input name="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    {/* <input name="title" type="text" placeholder="Title" value={genre} onChange={(e) => setGenre(e.target.value)} /> */}

                    <label for="genre">Choose your Genre:</label>

                    <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                        <option name="Hip Hop">Hip Hop</option>
                        <option name="Rap">Rap</option>
                        <option name="Pop">Pop</option>
                        <option name="RnB">RnB</option>
                    </select>
                    <input name="userId" type="hidden" value={userId} onChange={(e) => setUserId(e.target.value)} />

                    <input type="submit" value="submit" />
                </form>
            </div>
    )
}

export default New
