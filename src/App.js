import Navbar from './components/navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <div className="container">
         <div className="box">
            <span />
            <div className="content">
              <h2>Casual</h2>
              <p>Email : pk497243@gmail.com</p>
              <p>Best Buy</p>
              <a href="#">Bow now</a>
            </div>
          </div>
         <div className="box">
            <span />
            <div className="content">
              <h2>Formal</h2>
              <p>Email : pk497243@gmail.com</p>
              <p>Id : Pankaj</p>
              <a href="#">Read More</a>
            </div>
          </div>
      </div>
  
   </div>
    
  );
}

export default App;
