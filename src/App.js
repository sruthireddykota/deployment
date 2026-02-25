import Register from "./Register"
import Home from "./Home"
import {BrowserRouter,Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
            <Routes>
                <Route path="/reg" element={<Register/>}/>
                <Route path="/h" element={<Home/>}/>
            </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;
