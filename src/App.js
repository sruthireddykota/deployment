import Register from "./Register"
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
