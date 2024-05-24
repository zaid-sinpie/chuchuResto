import { useImperativeHandle, useRef, forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginPop = forwardRef(function LoginPop({ id }, ref) {
  const [userState, setUserState] = useState(false);
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  function toggleUserState(){
    setUserState(!userState);
  }

  let user;
  if (!userState){
    user = <p>New user? <strong><a onClick={toggleUserState}>create account</a></strong></p>
  }else{
    user = <p>Already have an account <strong><a onClick={toggleUserState}>Login</a></strong></p>
  }

  return createPortal(
    <dialog ref={dialog} className="popup">
      <h1>
        Welcome back! <sup>chu chu</sup>{" "}
      </h1>
      {!userState && <LoginForm/>}
      {userState && <SignupForm/>}
      {user}
    </dialog>,
    document.getElementById("modal")
  );
});

export default LoginPop;
