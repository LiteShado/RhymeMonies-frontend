import {useState, createContext } from 'react'
// import axios from 'axios'
const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const state = {
        userState: [user,setUser]
    }


    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider}
