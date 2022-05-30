import React from "react";
import "../css/Welcome.css";

function Welcome() {
    return(
      <div class="welcome">
        <i class="top-cloud fa-solid fa-cloud fa-8x"></i>
        <img class="profile-img" src="images/andi.png" alt="profile-img"/>
        {/* <h1 >I'm Andi</h1>
        <p>Welcome to my website!</p> */}
        <i class="bottom-cloud fa-solid fa-cloud fa-8x"></i>
    </div> 
  );
}

export default Welcome;