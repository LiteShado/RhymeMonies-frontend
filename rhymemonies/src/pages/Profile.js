import {useEffect, useState, userState} from 'react'
import axios from 'axios'
// import Music from '../components/Music'
// import '../css/Music.css'
import env from 'react-dotenv'
// import SongChoice from '../pages/SongChoice'
// import { Link, useParams } from 'react-router-dom'


const Profile = () => {

    const[profile, setProfile] = useState(null)
    const id = localStorage.getItem('id')
    const name = localStorage.getItem('name')
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    const [newName,setNewName] = useState(null)
    const [newEmail,setNewEmail] = useState(null)
    const [newPassword, setNewPassword] = useState('')
    const [newProfile, setNewProfile] = useState(null)

    console.log(id)
    console.log(name)


    const getProfile = async() => {
        const res = await {id, name, email, password}
        setProfile(res)
        console.log(res)
    }
    // const getProfile = async() => {
    //         try {
    //         const res = await axios.get(`${env.API_URL}/users/profile`)
    //         setProfile(res.data)
    //         console.log(res)
    //         console.log(res.data)
    //         console.log(props.song.id)
    //         // console.log(props.song.id)
    //         console.log(res.data.song)
    //         console.log(res)
    //         setProfile(res.data.song)
    //         console.log(res.data.song)

    //         } catch (error) {
    //             console.log(error)
    //         }
    // }

    useEffect(() => {
        getProfile()
    }, [])

console.log(profile)

const editSubmit = async (e) => {
    let newPassword = localStorage.getItem('password')
    let newEmail = localStorage.getItem('email')
    try {
    let ress = await axios.put(`${env.API_URL}/users/edit`, {
        name: newName,
        email: newEmail,
        password: newPassword,
    })
        setNewProfile(ress)
        console.log(ress)

    } catch (error) {
        console.log(error)
    }
}
const handleDelete = async (e) => {
    try {
        let resss = await axios.delete(`${env.API_URL}/users/delete`, {
        email: email
    })
    console.log(resss)
    localStorage.clear()
    window.location.reload();

    } catch (error) {
        console.log(error)
    }
}

return (
    <>
        <h1>Your Profile Details:</h1>
        <>
            {(profile) => {
                    <div className="profile">
                            <h2>Name:
                            {profile.name}</h2>
                            <h2>Password:
                            {profile.email}</h2>
                    </div>
            }}
        </>

            <h1>Edit Your Community Alias: </h1>
                <form onSubmit={editSubmit}>
                    <input name="newName" placeholder="Name" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />

                    <input name="newEmail" placeholder="Email" type="hidden" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />

                    <input name="newPassword" type="hidden" placeholder="UserId" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />

                    <input type="submit" value="submit" />
                </form>

            <h3 className="deleteTitle"> Delete My Profile </h3>
                <form onSubmit={handleDelete}>
                    <input name="newEmail" type="hidden" value={email} onChange={(e) => setNewEmail(e.target.value)} />

                    <button type="submit" value="submit">delete</button>
                </form>
        </>

    )
}

export default Profile
