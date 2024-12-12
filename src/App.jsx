
import './App.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Old from './Pages/Old'
import New from './Pages/New'
import { BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <ul className='bg-red-300 p-5 flex gap-6 justify-end  mb-20 text-blue-700'>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="./contact">ContactUs</Link></li>
        <li ><Link to="./about">About</Link></li>
        <li><Link to="./login">Login</Link></li>
        <li><Link to ="/P/old">old</Link></li>
        <li><Link to ="/P/new">new</Link></li>
      </ul>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/landing' element={<Landing></Landing>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            
            <Route path="/P">
                <Route path="old" element={<Old></Old>}></Route>
                <Route path="new" element={<New></New>}></Route>
            </Route>
        </Routes>

      </BrowserRouter>
        
    </>
  )
}

export default App
