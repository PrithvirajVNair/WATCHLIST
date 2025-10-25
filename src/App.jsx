import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import List from './pages/List'
import Planning from './pages/Planning'
import Watching from './pages/Watching'
import Hold from './pages/Hold'
import Dropped from './pages/Dropped'
import PageNotFound from './pages/PageNotFound'
import Add from './pages/Add'
import Completed from './pages/Completed'

function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/planning' element={<Planning/>}/>
        <Route path='/watching' element={<Watching/>}/>
        <Route path='/completed' element={<Completed/>}/>
        <Route path='/onhold' element={<Hold/>}/>
        <Route path='/dropped' element={<Dropped/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
