import React from "react";

const SignupForm = ({ close }) => {
  function handleSubmitSignup(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    if (data.password === data.confirmPassword) {
      console.log(data);
    } else {
      console.log("passwords do not match");
    }
  }

  return (
    <form action="#" method="" onSubmit={handleSubmitSignup}>
      <div>
        <label htmlFor="username">Email</label>
        <input type="text" id="username" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
      </div>
      <button>SignUp</button>
      <button type="button" onClick={close}>
        Cancle
      </button>
    </form>
  );
};

export default SignupForm;
