import { NavLink } from 'react-router-dom'
import bubble from '../assets/bubble.png'
import mask from '../assets/mask.png'

function Link({name, route}) {
    let cssLink = 'text-lg font-semibold'
    return <NavLink to={route} className={({isActive }) => isActive ? 'text-blue-700 ' + cssLink : cssLink + ' text-blue-500'}>{name}</NavLink>
}

function NavBar() {
  return (
    <header className="flex relative justify-between items-center bg-cyan-400 h-20 z-10 px-28">
        <img className="h-full absolute z-10 top-0 left-0" src={bubble}/>
        <NavLink to="/" className='z-20'>
           <img className='drop-shadow-xl h-14' src={mask}/>
        </NavLink>
        <div className='flex space-x-12 items-center'>
            <Link name="Projects" route="/Projects"/>
            <Link name="About" route="/About"/>
            <Link name="Contact" route="/Contacts"/>
        </div>
    </header>
  )
}

export default NavBar