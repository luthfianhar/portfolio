import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

 function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
 
export default App;