
import {Link} from 'react-router-dom'

const Songs = (props) => {
    return (
        <div>

            {props.preview && (
                <Link to ={`/songs/${props.song.id}`}>
                <h1>{props.song.title}</h1>
                </Link>
            )}

            {props.full && props.song &&
            <div>
                <div>
                    <h1>{props.song.title}</h1>
                </div>
                <div>
                    <p>{props.song.genre}</p>
                </div>
                <div>
                    <p>By: {props.song.user.name}</p>
                </div>
            </div>
            }

        </div>
    )
}

export default Songs
