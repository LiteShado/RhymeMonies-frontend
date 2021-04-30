import {useState} from 'react'
import axios from 'axios'

const New = () => {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')

    const addSong = async (e) => {
        e.preventDefault()
        try {
            let auth = localStorage.getItem('userId')
            let res = await axios.post('http://localhost:3001/songs',

            {
                title: title,
                genre: genre
            },
            {
                headers: {
                    authorization:auth
                }
            })

            console.log(res)
        } catch (error) {
           console.log(error)
        }
    }

    return (
        <>
        <h1>Submit a New Song to the Community!</h1>
        <form onSubmit={addSong}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
        </>
    )
}

export default New
