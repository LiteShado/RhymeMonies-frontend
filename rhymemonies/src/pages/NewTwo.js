import { useState } from 'react'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'
import env from "react-dotenv"
import {useLocalStorage} from '../useLocalStorage'

const New = () => {
    const [shouldRedirect, setShouldRedirect] =
    useState(null)



    const [song, setSong] = useState({
        title: '',
        genre: '',
        userId: useLocalStorage('userId')
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        setSong({
            ...song,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        // e.preventDefault()
        const res = await axios.post(`${env.API_URL}/songs/new`, song)
        console.log(song)
        console.log(res)
        // setShouldRedirect(res.data.id)
    }

// const [song, setSong] = useState({})

return (
        <div>
            { shouldRedirect &&
            <Redirect to={`/users/profile`} /> }

        <h1>Submit a New Song to the Community!</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="new-title">Title:</label>
                <input type="text" placeholder="title" name="title" value={song.title} onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="new-genre">Genre:</label>
                <input type="text" placeholder="genre" name="genre" value={song.genre} onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="userId"></label>
                <input type="hidden" placeholder="userId" name="userId" value={song.userId} onChange={handleChange}
                />
            </div>
            <input type="submit" value="submit" />

        </form>

        </div>
    )
}


export default New
