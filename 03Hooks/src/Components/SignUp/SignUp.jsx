import { useState } from "react"
import "./SignUp/SignUp.css"

export const SignUp = () => {

    const [user, setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phoneNumber:"",
        password:""
    });

    const handleInputChange = (e) =>{
        const { name, value } = e.target;

        setUser((prev) => ({...prev, [name]:value}))
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(user);
    }


  return (
    <div className="conatiner">
        
        <h1>Sign Up</h1>
        <p>please fill in this form to craete an account</p>
        <form action="" onSubmit={handleSubmitForm}>
        <div className="form">
            <label htmlFor="firstname"><b>First name:</b></label>
            <input type="text" name="firstname" placeholder="Enter a first name" value={user.firstname} onChange={handleInputChange}/>

            <label htmlFor="lastname"><b>Last name:</b></label>
            <input type="text" name="lastname" placeholder="Enter a last name" value={user.lastname} onChange={handleInputChange}/>

            <label htmlFor="email"><b>email:</b></label>
            <input type="email" name="email" placeholder="Enter a email" value={user.email} onChange={handleInputChange}/>

            <label htmlFor="phoneNumber"><b>Phone Number:</b></label>
            <input type="number" name="phoneNumber" placeholder="Enter a phone number" value={user.phoneNumber} onChange={handleInputChange}/>

            <label htmlFor="password"><b>password:</b></label>
            <input type="password" name="password" placeholder="Enter a password" value={user.password} onChange={handleInputChange}/>
        </div>
        <div className="btn">
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
    
  )
}
