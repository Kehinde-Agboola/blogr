import React from "react";
import Showcase from "./component/Showcase";
import Header from "./component/Header";
// import Menu from "./component/Menu";
import Design from "./component/Design";
import Free from "./component/Free";
import State from "./component/State";
import Footer from "./component/Footer";
const App = () => {
  return (
    <div className="App">
      {/* <Menu /> */}
      <Header />
      <Showcase />
      <Design />
      <State />
      <Free />

      <Footer />
    </div>
  );
};

export default App;
