import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import HomePage from "../Pages/HomePage";
import "../sass/style.scss";

function App() {


  return (
    <>
   <div className="layout-wrapper">
    <NavBar />
    <HomePage />
   </div>
   <Footer />
   </>
  )
}

export default App
