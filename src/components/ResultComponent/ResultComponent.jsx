import React from 'react';
import './Result.css'

class Result extends React.Component{
      render(){
          return(<div className="result">

              <div className="res">
              <img src="https://cdn-0.emojis.wiki/emoji-pics/microsoft/check-mark-microsoft.png" alt="tick pic"></img>
              <div>Result</div>
              </div>

              <div className="box">
                  <div>You Need More Practice</div>
                  <div>Your Score : 20%</div>
                  <pre><span>Total Number of Questions</span><span>15</span></pre>
                  <pre><span>Total Number of Attempted Questions</span><span>12</span></pre>
                  <pre><span>Total Number of Correct Answers</span><span>10</span></pre>
                  <pre><span>Total Number of Wrong Answers</span><span>2</span></pre>
              </div>

              <button className="play">PlayAgain</button>
              <button className="stop">BackToHome</button>
          </div>)
      }
}
export default Result;