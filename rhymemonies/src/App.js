import './App.css';
import axios from 'axios'
import { useEffect, useContext} from 'react'
import {UserContext} from './context/UserContext'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import New from './pages/New'
import Songs from './pages/Songs'
import MySongs from './pages/MySongs'
import Profile from './pages/Profile'
import SongChoice from './pages/SongChoice'
import Home from './pages/Home'
import {Route, Redirect, Switch} from 'react-router-dom'
import env from 'react-dotenv'

function App() {

  const {userState} = useContext(UserContext)
  const [user,setUser] = userState

  const userInfo = async () => {
    const userId = localStorage.getItem('userId')
    try {
      let user = await axios.get('http://localhost:3001/users' ,{
      headers:{
        authorization: userId
      }
    })

    if(user.data.user) {
      setUser(user.data)
    }
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    userInfo()
  }, [])

  console.log(user)

  return (

    <div>
      <Navbar />
      <Route
        path="/"
        exact
        render = {() => {
          return <Redirect to="/users" />
        }}
      />
      <Route exact path="/">
        { user.id ?
        <Redirect to="/songs" />
        :
         <Home />
        }
      </Route>
      <Route
      exact path="/users/new">
      { user.id ?
        <Redirect to="/songs" />
      :
        <Signup />
      }
      </Route>

      <Route exact path="/songs">
          {user.id &&
          <Songs />
          }
        </Route>
        <Route exact path="/songs/new">
          {user.id &&
          <New />
          }
      </Route>

      <Route exact path="/users/songs">
          {user.id &&
          <MySongs />
          }
        </Route>
      <Route exact path="/users/profile">
          {user.id &&
          <Profile />
          }
      </Route>
      <Route exact path="/songs/:id">
          {user.id &&
          <SongChoice />
          }
      </Route>

    </div>
  )
}




export default App;
