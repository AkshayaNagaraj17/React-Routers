
import { useNavigate } from "react-router-dom"

function Login() {

    const nav=useNavigate()

    function click()
    {
        nav("/landing")
    }
  return (
    <div>
      <h1>Login page</h1>
      <input type="text" placeholder="Email"/>
      <input type="text" placeholder="password"/>
      <button onClick={click}> Login</button>
    </div>
  )
}

export default Login
