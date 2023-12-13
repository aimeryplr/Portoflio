import NavBar from "./components/NavBar.jsx"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {Projects} from "./pages/index.js"

function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={"About"} />
          <Route path="/Contacts" element={"Contacts"} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
