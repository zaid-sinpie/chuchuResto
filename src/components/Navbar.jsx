import logo from '../assets/logo.png';
import Button from './Button.jsx';


export default function Navbar(){
    let btnClicked;

    function isBtnClicked(){
        if (id === 'login'){
            btnClicked = id;
        }
    }

    return(
        <ul className='navbar'>
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="btns">
                <Button onSelect={isBtnClicked} id={'login'}>Login</Button>
                <Button id={'signup'}>Signup</Button>
            </div>
        </ul>
    )
}