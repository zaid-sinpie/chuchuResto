import React from "react";

const LoginForm = ({close}) => {

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
      <button type="button" onClick={close}>Cancle</button>
    </form>
  );
};

export default LoginForm;
