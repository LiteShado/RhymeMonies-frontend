import './App.css';
// import env from 'react-dotenv'
// import axios from 'axios'
// import {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import New from './pages/New'
import Songs from './pages/Songs'
import MySongs from './pages/MySongs'
import {Route, Redirect} from 'react-router-dom'

function App() {
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
      <Route
        exact
        path="/users"
        render = {() => {
          return <Login />
        }}
      />
      <Route
        exact
        path="/users/new"
        render = {() => {
          return <Signup />
        }}
      />
      <Route
        exact
        path="/songs"
        render = {() => {
          return <Songs />
        }}
      />
      <Route
        exact
        path="/songs/new"
        render = {() => {
          return <New />
        }}
      />
      <Route
        exact
        path="/song/:id"
        render = {() => {
          return <MySongs />
        }}
      />
    </div>
  )
}




export default App;
