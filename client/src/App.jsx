import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './assets/logo.svg'
import { Home, CreatePost } from './pages'

function App() {
  return (
    <>
      <header className="flex items-center justify-between border-b border-b-[#e6ebf4] px-4 py-4 md:px-8">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="btn-transition rounded-md bg-[#6469ff] px-4 py-2 font-inter font-medium text-white hover:bg-[#4e54f8]"
        >
          Create
        </Link>
      </header>
      <main className="px-4 py-8 md:px-8">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CreatePost />} path="/create-post" />
        </Routes>
      </main>
    </>
  )
}

export default App
