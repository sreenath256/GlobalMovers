import { Route, Routes } from "react-router-dom"

import Home4 from "./pages/Home4"
import About from "./pages/About.jsx"

function App() {

  return (
    <div className='flex flex-col gap-20 '>
      <Routes>
        <Route path="/" element={<Home4 />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/home2" element={<Home2 />} /> */}
      </Routes>
    </div>
  )
}

export default App
