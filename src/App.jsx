import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {Projects, Home, Footer, NavBar} from "./pages/index.js"

function App() {
  return (
    <main className="bg-slate-100">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={"About"} />
        </Routes>
        <Footer />
      </Router>
    </main>
  )
}

export default App
