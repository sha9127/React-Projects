import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/ContactSection/Contact";
import Form from "./components/Form/ContactForm";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="main_container">
        <Contact />
        <Form />
      </main>
    </>
  );
};

export default App;
