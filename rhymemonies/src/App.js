import './App.css';
import axios from 'axios'
import { useEffect, useContext} from 'react'
import {UserContext} from './context/UserContext'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import New from './pages/New'
import Songs from './pages/Song'
import MySongs from './pages/MySongs'
import {Route, Redirect, Switch} from 'react-router-dom'

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
      <Route exact path="/users">
        { user.id ?
          <Redirect to="/songs" />
        :
         <Login />
        }
      </Route>
      <Route exact path="/users/new">
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

      <Route exact path="/songs/:id">
          {user.id &&
          <MySongs />
          }
        </Route>
    </div>
  )
}




export default App;
