import NavBar from "./components/NavBar"
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {Projects} from "./pages"

function App() {
  return (
    <main className="bg-slate-100">
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
