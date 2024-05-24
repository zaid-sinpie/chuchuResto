import React from 'react'

const SignupForm = () => {
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
    </form>
  )
}

export default SignupForm
