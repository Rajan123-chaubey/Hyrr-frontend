
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import Posts from './pages/Posts'
import Postcard from './components/Postcard'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Signin />} />

    <Route path="/Signup" element={<Signup />} />
    <Route path="/Signin" element={<Signin />} />
    <Route path="/posts" element={<Posts/>} />
    <Route path="/posts/:id" element={<Postcard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
