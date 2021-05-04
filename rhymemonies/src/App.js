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
import Lyric from './pages/Lyric'
import {Route, Redirect, Switch} from 'react-router-dom'
import env from 'react-dotenv'

function App() {

  const {userState} = useContext(UserContext)
  const [user,setUser] = userState

  const userInfo = async () => {
    const userId = localStorage.getItem('userId')


    try {
      let user = await axios.get('http://localhost:3001/users/profile' ,{
      headers:{
        authorization: userId
      }
    })

    if(user.data.user) {
      setUser(user.data)
      console.log(user.data)
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

      {/* <Route
        path="/"
        exact>
      { user.id ?
        <Redirect to="/songs" />
        :
        <Home />
        }
      </Route> */}

      <Route
        path="/"
        exact>
        { user.id ?
        <Redirect to="/songs" />
      :
      <Home />
        }
      </Route>

      <Route
        path="/users"
        exact>

        {/* // component={Login} */}
        { user.id ?
        <Redirect to="/songs" />
      :
        <Login />
        }
      </Route>

      <Route
        path="/users/new"
        exact
        component={Signup}
      />
      <Route
        path="/songs/user"
        exact
        component={MySongs}
      />
      <Route
        path="/users/profile"
        exact>
          { user.id ?
          <Profile />
          :
          <Redirect to="/users" />
          }
      </Route>
      <Route
        path="/songs"
        exact>
          { user.id ?
        <Songs />
        :
        <Redirect to="/users" />
        }
      </Route>
      <Route
        path="/songs/new"
        exact
        component={New}
      />
      <Route
        path="/lyrics/:id"
        exact
        component={Lyric}
      />
      <Route
        path="/songs/:id"
        exact
        render={(routeInfo) => {
        }}
        component={SongChoice}
        />

      {/* <Route
      exact path="/users">
      { user.id ?
        <Redirect to="/songs" />
      :
        <Login />
      }
      </Route>

      <Route
      exact path="/users/new">
      { user.id ?
        <Redirect to="/songs" />
      :
        <Signup />
      }
      </Route> */}

      {/* <Route exact path="/users/songs">
        {user.id &&
          <MySongs />
        }
      </Route> */}
      {/* <Route exact path="/users/profile">
      { user.id &&
          <Profile />
      }
      </Route> */}

      {/* <Route exact path="/songs">
          { user.id &&
          <Songs />
        }
      </Route> */}

      {/* <Route exact path="/songs/new">
        { user.id &&
          <New />
        }
      </Route> */}

      {/* <Route
      path="/songs/:id"
      render={(routeInfo) => {
        // console.log(routeInfo);
        return <SongChoice
        // id={routeInfo.match.params.id}
        />
      }}
      /> */}

      {/* <Route exact path="/songs/:id/lyrics">
      {user.id &&
          <Lyric />
        }
      </Route> */}

    </div>
  )
}




export default App;
