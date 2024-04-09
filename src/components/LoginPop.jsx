export default function LoginPop({}) {
  return (
    <dialog className="popup">
        <h1>Welcome back! <sup>chu chu</sup> </h1>
        <p>Are you a new user? <strong><a href="#">Signup</a></strong> here.</p>
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
  );
}
