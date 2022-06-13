import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutimage from "./images/instrument.png";
import aboutimage1 from "./images/instrument.png";
import Presentation from "./components/Presentation";
import Contacts from "./components/Contacts";
function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutimage} />
      <Presentation image={aboutimage}  />
      <Contacts/>
    </div>
  );
}

export default App;
