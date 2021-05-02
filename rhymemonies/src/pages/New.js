import {useState, useContext} from 'react'
import {UserContext} from '../context/UserContext'
import axios from 'axios'
import '../css/Login.css'
import env from 'react-dotenv'

const New = () => {
    const {userState} = useContext(UserContext)
    const [song,setSong] = userState

    const [title,setTitle] = useState('')
    const [genre,setGenre] = useState('')
    const [userId,setUserId] = useState('')

    const signupSubmit = async (e) => {
        e.preventDefault()
        // let user = localStorage.getItem('userId')
        let id = localStorage.getItem('userId')
        console.log(id)

        let res = await axios.post(`${env.API_URL}/songs/new`, {
            title: title,
            genre: genre,
            userId: id
        })
        console.log(res)
        localStorage.setItem('title', res.data.song.title)
        localStorage.setItem('genre', res.data.song.genre)

        setSong(res.data.song)
        // localStorage.setItem('userId', res.data.user.id)
    }

    return (
        <div>
            <div className="newSongContainer">
                <h1>Add Your Song to the Community!</h1>
                <form onSubmit={signupSubmit}>
                    <input name="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

                    <label for="genre">Choose your Genre:</label>

                    <select name="genre">
                        <option value={genre} onChange={(e) => setGenre(e.target.value)}>Hip Hop</option>
                        <option value={genre} onChange={(e) => setGenre(e.target.value)}>Rap</option>
                        <option value={genre} onChange={(e) => setGenre(e.target.value)}>Pop</option>
                        <option value={genre} onChange={(e) => setGenre(e.target.value)}>RnB</option>
                        </select>
                    <input name="userId" type="hidden" placeholder="UserId" value={userId} onChange={(e) => setUserId(e.target.value)} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </div>
    )
}

export default New
