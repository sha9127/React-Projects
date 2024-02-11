import logo from '../../images/logo.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={`${styles.nav} container`}>
        <div className='logo'> <img src={logo} alt="logo" /></div>
        <div>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>Conatct</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar