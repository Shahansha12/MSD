// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <code>Mohamed Shahansha </code>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import ReactDOM from 'react-dom';
import React from 'react';
import './style.css';
import styles from './demo.module.css';
import img1 from './images/harley1.jpeg'
// import { render } from '@testing-library/react';
class Reactstyle extends React.Component {
  
  render()
    {
    const mystyle={
      color:"yellow",
      backgroundColor:"blue"
    };
    
    return(
      <div >
         <h1 className='App'/*style={mystyle}*/>POWER BIKES</h1>
         <h2 className={styles.heading}>HARLEY DAVIDSON</h2>
         <div>
        <img src={img1} width="500" height="300" style={{paddingRight:'400px'}}></img>
        <img src={img1} width="500" height="300" style={{direction:''}} ></img>
        </div>
        <video width="500" height="500" controls style={{paddingLeft:'450px'}}> 
        <source src='./videos/into.mp4'/>
        </video>
        <div>
        <img src={img1} width="500" height="300" style={{paddingRight:'400px'}}></img>
        <img src={img1} width="500" height="300" ></img>      
        </div>
          <h1>play the video</h1>
        
      </div>
      
   );
  }
}
ReactDOM.render(<Reactstyle/>,document.getElementById("root"));
    