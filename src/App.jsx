import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
  import Galery from "./components/Galery";


 function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <Main />
        <Galery />
      <Footer />
   
    </div>
  );
}
 
export default App;

