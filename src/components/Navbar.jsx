import logo from '../assets/logo.png';
import Button from './Button.jsx';


export default function Navbar(){
    return(
        <ul className='navbar'>
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="btns">
                <Button>Login</Button>
                <Button>Signup</Button>
            </div>
        </ul>
    )
}