import React from "react";


function Registerpage(){
 
     const [username,setusername] = React.useState("");
     const [password,setpassword] = React.useState("");
   

       function handelregistername(event){
        setusername(event.target.value);
       }

       function handelregisterpass(event){
        setpassword(event.target.value);
       }


     async function register(ev){
        ev.preventDefault();
        await fetch('https://localhost:4000/register',{
            
            method :'POST',
            body: JSON.stringify({username,password}),
            headers : {'Content-Type':'application/json'},
            
           
            
        })          
       }


    return(
        <form className="register" onSubmit={register}>
        <h1>Register</h1>
        <input type="text"
               placeholder="username"
               value={username}
               onChange={handelregistername}/>
        <input type="password"
               placeholder="password"
               value={password}
               onChange={handelregisterpass}/>
        <button>Register</button>
      </form>
    )
}

export default Registerpage;



//Api keyFL5n1gTls8lRZk0nefqDEfQIQKQMeDqHRN4gtZiUZdYjFcQms4Z8WDga8VLLjgDK