import React from 'react';
import './Home.css';

class Home extends React.Component{
     render(){
         return(<div className="homepage">
             <div>Quiz App</div>
             <button onClick>PLAY</button>
         </div>)
     }
}
export default Home