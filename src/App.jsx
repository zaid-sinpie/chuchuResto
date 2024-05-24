import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Content from "./components/Content.jsx";
import LoginPop from "./components/LoginPop.jsx";
import { useRef } from "react";

function App() {

  const dialog = useRef();

  function openModal(){
    dialog.current.open();
  }

  return (
    <>
      <Navbar openModal={openModal} />
      <Section>
        <Content />
        <LoginPop ref={dialog}/>
      </Section>
    </>
  );
}

export default App;
