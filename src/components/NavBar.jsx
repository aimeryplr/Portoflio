import { NavLink } from 'react-router-dom'
import bubble from '../assets/bubble.png'
import mask from '../assets/mask.png'

function Link({name, route}) {
    let cssLink = 'text-xl font-semibold'
    return <NavLink to={route} className={({isActive }) => isActive ? 'text-slate-50 ' + cssLink : cssLink + ' text-slate-200'}>{name}</NavLink>
}

function NavBar() {
  return (
    <>
      <header className="flex fixed justify-between w-screen items-center bg-cyan-400 h-20 z-50 px-28">
          <NavLink to="/" className='z-20'>
            <img className='drop-shadow-xl h-14' src={mask}/>
          </NavLink>
          <div className='flex space-x-12 items-center'>
              <Link name="Projects" route="/Projects"/>
              <Link name="About" route="/About"/>
              <Link name="Contact" route="/Contacts"/>
          </div>
      </header>
      <div className='relative h-20 bg-transparent'></div>
    </>
  )
}

export default NavBar