import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Content from "./components/Content.jsx";
import LoginPop from "./components/LoginPop.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Section>
        <Content />
        {/* <LoginPop/> */}
      </Section>
    </>
  );
}

export default App;
