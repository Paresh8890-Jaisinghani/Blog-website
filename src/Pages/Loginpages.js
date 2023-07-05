import React from "react";



function Loginpages(){
    return (
      <form className="login">
      
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Enter user name" id="username" required />

        <label for="password">Password</label>
        <input type="password" placeholder="Enter password" id="password"required />

        <button class="button"><span>Log In Now</span></button>
       
     
</form>
    </form>
    );
}


export default Loginpages;