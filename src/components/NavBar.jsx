import { NavLink } from 'react-router-dom'
import mask from '../assets/mask.png'

function Link({name, route}) {
    let cssLink = 'sm:text-2xl text-xl font-semibold'
    return <NavLink to={route} className={({isActive }) => isActive ? 'text-slate-50 font-thin ' + cssLink : cssLink +
     ' text-slate-200 font-thin'}>{name}</NavLink>
}

function NavBar() {
  return (
    <>
      <header className="flex fixed justify-between w-screen items-center bg-cyan-400 sm:h-[9vh] h-[6vh] z-50 sm:px-28 px-4">
          <NavLink to="/" className='z-20'>
            <img className='drop-shadow-xl sm:h-14 h-8' src={mask}/>
          </NavLink>
          <div className='flex sm:space-x-12 space-x-8 items-center font-ocean'>
              <Link name="Projets" route="/projets"/>
              <Link name="À propos" route="/"/>
          </div>
      </header>
      <div className='relative sm:h-[9vh] h-[6hv] bg-transparent'></div>
    </>
  )
}

export default NavBar