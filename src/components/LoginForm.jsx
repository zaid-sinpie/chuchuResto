import React from "react";

const LoginForm = () => {
  return (
    <form action="#" method="">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required/>
      </div>
      <div>
        <label htmlFor="password" required>Password</label>
        <input type="password" id="password" />
      </div>
      <button>LogIn</button>
    </form>
  );
};

export default LoginForm;
