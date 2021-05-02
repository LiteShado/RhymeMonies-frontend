import { useState } from 'react'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'
import env from "react-dotenv"

const New = () => {
    // const [shouldRedirect, setShouldRedirect] =
    // useState(null)

    // const [song, setSong] = useState({
    //     title: '',
    //     genre: '',
    //     userId: ''
    // })

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setSong({
    //         ...song,
    //         [name]: value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post(`${env.API_URL}/songs/new`, song).then((response) => {
    //         console.log(response);
    //     })
    //     setShouldRedirect(response.data.id)
    //     }


return (
        <div>
            {/* { shouldRedirect &&
            <Redirect to={`/songs/${shouldRedirect}`} /> }

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
                <input type="submit" value="submit" />
            </div>

        </form> */}

        </div>
    )
}


export default New
