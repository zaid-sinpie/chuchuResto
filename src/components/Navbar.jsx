import logo from '../assets/logo.png';
import Button from './Button.jsx';


export default function Navbar({openModal}){

    return(
        <ul className='navbar'>
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="btns">
                <Button onClick={openModal} id={'login'}>Get Started</Button>
            </div>
        </ul>
    )
}