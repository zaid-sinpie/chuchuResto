import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Content from "./components/Content.jsx";
import LoginPop from "./components/LoginPop.jsx";
import { useEffect, useState } from "react";

function App() {
  const [currBtnClicked, setCurrBtnClicked] = useState("");

  const handleClick = (id) => {
    setCurrBtnClicked(id);
    console.log(currBtnClicked);
  };

  //code to add the specific modal by which button is clicked login or logout
  let modalWindow;
  if (!currBtnClicked) {
    modalWindow = null;
  }
  if (currBtnClicked === "login") {
    modalWindow = <LoginPop />;
  }
  if (currBtnClicked === "signup") {
    modalWindow = <SignupPop />;
  }

  return (
    <>
      <Navbar onSelect={handleClick} />
      <Section>
        <Content />
        {modalWindow}
      </Section>
    </>
  );
}

export default App;
