import React from "react"
import "./styles/App.css"
import Start from "./views/Start"
import Event from "./views/Event"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Login from "./views/Login"
import User from "./views/User"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/user/:id" element={<User />} />
        </Routes>
        <Routes>
          <Route path="/event/:id" element={<Event />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
