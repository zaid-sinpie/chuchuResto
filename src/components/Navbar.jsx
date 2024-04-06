import logo from '../assets/logo.png';


export default function Navbar(){
    return(
        <ul className='navbar'>
            <div className="logo"><img src={logo} alt="" /></div>
            <div className="btns">
                <button className='btn'>Login</button>
                <button className='btn'>Signup</button>
            </div>
        </ul>
    )
}