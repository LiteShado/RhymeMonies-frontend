
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import env from 'react-dotenv'


const Profile = () => {
    const [shouldRedirect, setShouldRedirect] =
    useState(null)

    const [song, setSong] = useState({
        title: '',
        genre: '',
        userId: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setSong({
            ...song,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${env.API_URL}/songs/new`, song).then((response) => {
            console.log(response);
        })
        setShouldRedirect(response.data.id)
        }
    }

    const getAllSongs = () => {

        axios.get(`${env.API_URL}/songs`).then((response) => {
           console.log(response)
           setAllSongs(response.data)
       })
}



    return (
        <div>
        { shouldRedirect &&
        <Redirect to={`/songs/${shouldRedirect}`} /> }

    <h1>Edit Your Profile:</h1>
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

    </form>

    </div>

    )
}

export default Profile
