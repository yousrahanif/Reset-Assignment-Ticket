import "./App.css";
import SingleTicket from "./components/CustomerTicket/SingleTicket";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="grid grid-cols-12 gap-2 p-4">
        <div className="col-span-6">
          <h2>Hi</h2>
        </div>
        <div className="col-span-3">
          <h2>hello</h2>
        </div>
      </div>
      <SingleTicket></SingleTicket>
      <Footer></Footer>
    </div>
  );
}

export default App;
