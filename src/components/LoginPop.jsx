export default function LoginPop({btnClicked}) {
  btnClicked = 'signup';
  let ptag;
  if(btnClicked === 'login'){
    ptag = <p>Are you a new user? <strong><a href="#">Signup</a></strong> here.</p>
  }
  if (btnClicked === 'signup'){
    ptag = <p>Already have an account?<strong><a href="#">Login</a></strong> here.</p>
  }
  
  return (
    <>
    <dialog className="popup">
        <h1>Welcome back! <sup>chu chu</sup> </h1>
        {ptag}
      <form action="#" method="">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
        </div>
        <button type="submit">Login</button>
      </form>
    </dialog>
    <div className="overlay"></div>
    </>
  );
}
