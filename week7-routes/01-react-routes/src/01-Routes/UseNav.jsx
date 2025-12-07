import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import  Dashboard from "../components/Dashboard"
import  Landing  from "../components/Landing"

function UseNav() {
  return(
    <div>
      <div>
        <BrowserRouter> 
          <Appbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/" element={<Landing />} />
          </Routes> 
        </BrowserRouter>
      </div>
    </div>
  )
}
function Appbar() {
  const navigate = useNavigate();
  return(
    <div>
       <div>
          <button onClick={() => {
            navigate("/")
          }}> Landing Page </button>

          <button onClick={() => {
            navigate("/dashboard")
          }}> Dashboard Page </button>
      </div>
    </div>
  )
}

export default UseNav;