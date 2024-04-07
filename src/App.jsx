import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Section from "./components/Section.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Section>
        <Content />
      </Section>
    </>
  );
}

export default App;
