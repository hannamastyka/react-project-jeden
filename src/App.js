import "./App.css";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import SpecialistsList from "./components/SpecialistsList/SpecialistsList";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Menu />
      <Header />
      <SpecialistsList />
      <Services />

      <Footer />
    </>
  );
}

export default App;
