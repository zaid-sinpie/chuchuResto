import React from 'react'

const SignupForm = ({close}) => {
  return (
    <form action="#" method="">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" required/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required/>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" />
      </div>
      <button>SignUp</button>
      <button type="button" onClick={close}>Cancle</button>
    </form>
  )
}

export default SignupForm
