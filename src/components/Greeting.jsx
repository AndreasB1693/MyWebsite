import React from "react";
import "../css/Greeting.css";

function Greeting() {
    return(
      <div class="greeting">
      <div>
        <h1 >I'm Andi</h1>
        <p>Welcome to my website!</p>
    </div> 
     <div class="work"> 
     <img class="work-logo" src="images/lw.png" alt="tc-logo"/>
     <img class="work-logo" src="images/airbus.png" alt="tc-logo"/>
    </div>
    </div>
  );
}

export default Greeting;