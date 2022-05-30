
import './App.css'; 
import './Responsive.css';
import Nav from "./components/Nav.js";
import Section1 from "./components/Section1"; 
import Section2 from "./components/Section2";
import Section3 from "./components/Section3" ;




function App() {
  return (
    <div className="App">
     <Nav />  
     <Section1 />
     <Section2 />
     <Section3 />
    </div> 
  )
}

export default App;
