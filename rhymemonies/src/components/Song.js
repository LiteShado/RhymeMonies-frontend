import {Link} from 'react-router-dom'
// import {useState} from 'react'


const Song = (props) => {
    return (
        <div className="songPreview">
            {/* check whether this is a question in the homepage or the single post page to conditionally render just the title or the whole thing */}
            {props.preview && (
                <Link to ={`/songs/${props.song.id}`}>
                <h1>{props.song.title}</h1>
                </Link>
            )}


        {/* single post page to conditionally render the full question */}
            {props.full && props.question &&
            <div className="fullSong">
                <div className="fullSongTitle">
                    <h1>{props.song.title}</h1>
                </div>
                <div className="fulLSongGenre">
                    <p>{props.genre.genre}</p>
                </div>
            </div>
            }

        </div>
    )
}

export default Song
