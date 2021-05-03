import {useState} from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const New = () => {

    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')

    const makeSong = async (e) => {
        e.preventDefault()
        try {
            let auth = localStorage.getItem('userId')
            let res = await axios.post(`${env.API_URL}/users/new`,

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
        <h1>Submit a Song!!</h1>
        <form onSubmit={makeSong}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />

            <input type="text" placeholder="description" value={genre} onChange={(e) => setGenre(e.target.value)} />

            <input type="submit" value="submit" />
        </form>
        </>
    )
}

export default New
