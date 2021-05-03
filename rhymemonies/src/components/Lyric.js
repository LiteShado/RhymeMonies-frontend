import '../css/Answer.css'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const Lyric = (props) => {

    const[isMatch, setIsMatch] = useState(false)

        const authCheck = async (id) => {
        let res = await axios.get(`${env.API_URL}/users/authcheck`, {
            headers: {
                authorization: localStorage.getItem('userId')
            }
        })
        console.log(res.data.user, id)
        if(res.data.user === id) {
            console.log('true')
            setIsMatch(true)
            return true
        } else {
            return false
        }
    }

    useEffect(() => {
        authCheck(props.answer.user.id)
    },[])

    return (
        <div className="singleLyric">
            <div className="lyric">
                <p>{props.lyric.lyric}</p>
            </div>
            <div className="lyricUser">
                <p>
                    By: {props.lyric.user.name}
                </p>
            </div>
            {/* {isMatch && <button onClick={() => delete(props.lyric.id)}>Delete</button>} */}
        </div>
    )
}

export default Lyric
