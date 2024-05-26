import React from "react";

const LoginForm = ({ close }) => {
  function handleSubmitLogin(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    console.log(data);
  }

  return (
    <form action="#" method="" onSubmit={handleSubmitLogin}>
      <div>
        <label htmlFor="username">Email</label>
        <input type="text" id="username" name="email" required />
      </div>
      <div>
        <label htmlFor="password" required>
          Password
        </label>
        <input type="password" id="password" name="password" />
      </div>
      <button>LogIn</button>
      <button type="button" onClick={close}>
        Cancle
      </button>
    </form>
  );
};

export default LoginForm;
