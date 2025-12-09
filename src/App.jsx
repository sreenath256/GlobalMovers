import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home1 from "./pages/Home1"
import Home2 from "./pages/Home2"
import Home3 from "./pages/Home3"


function App() {

  return (
    <div className='flex flex-col gap-20 '>
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </div>
  )
}

export default App
