import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {Projects, Home, Footer, NavBar} from "./pages/index.js"
import {useEffect} from "react";

function App() {

  useEffect(() => {
    const removeDiv = () => {
      // Sélectionner la div à supprimer en utilisant un sélecteur CSS
      var divASupprimer = document.querySelector('div[style="text-align: right;position: fixed;z-index:9999999;bottom: 0;width: auto;right: 1%;cursor: pointer;line-height: 0;display:block !important;"]');

      // Vérifier si la div existe
      if (divASupprimer) {
        // Supprimer la div
        divASupprimer.parentNode.removeChild(divASupprimer);
      } else {
        console.log("La div spécifiée n'existe pas.");
      }
    };

    // Run the function after the component mounts
    document.addEventListener("DOMContentLoaded", removeDiv);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("DOMContentLoaded", removeDiv);
    };
  }, []);

  return (
    <main className="bg-slate-100">
      <Router basename={"/portfolio"}>
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
