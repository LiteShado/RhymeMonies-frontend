
import axios from 'axios'

import {useState} from 'react'


const New = (props) => {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')

    const submitSong = async (e) => {
        e.preventDefault()
        let res = await axios.post(`http://localhost:3001/songs`,
        // let res = await axios.post(`http://localhost:3001/api/post/${props.question.id}/answer`,
        {
            title: title,
            genre: genre

        },
        {
            headers: {
                authorization: localStorage.getItem('userId')
            }
        })
        console.log(res)
        props.getSong()
        setTitle('')
        setGenre('')
    }
    return (
        <form onSubmit={submitSong}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
    )
}

export default New
