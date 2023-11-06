
import {Link} from 'react-router-dom'

import { useState } from 'react'
import React from 'react'


   
export default function Contact() {


    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:""
        
        
        })

    const [showThankYou, setShowThankYou] = useState(false);
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

        function handleChange(event) {
          const { name, value } = event.target;
          setData({
            ...data,
            [name]: value
          });
          setIsCheckboxChecked(event.target.checked)
        }

      function handleSubmit (event) {
      event.preventDefault()

      
      console.log(data)



      if (isCheckboxChecked && data.firstname && data.lastname && data.email) {
        setShowThankYou(true);
        
        document.querySelector('.form-container').classList.add('blur');
       
      }else{

        alert("Please fill out all fields")

       
      }
   


    }
  


  return (
    <>

<div className="form-container">

<h1>Subscribe</h1>
<h2>Never miss a recipe!</h2>
    
    
<h2>Sign up with your email address to receive news and updates.</h2>
    


    <form onSubmit= {handleSubmit}>
    
    <div class="input-container">
      <br/>
      <input  name = "firstname" readOnly={isCheckboxChecked} id="firstname" onChange= {handleChange} type='text' placeholder='First Name' autofocus={isCheckboxChecked}/>
      
      <input  name = "lastname" readOnly={isCheckboxChecked} id="lastname" onChange= {handleChange} type='text' placeholder='Last Name' autofocus={isCheckboxChecked}/>
      <br/>

      
      </div>
      
      <div class="input-container1">
      <input name = "email" readOnly={isCheckboxChecked} onChange= {handleChange} type='email' placeholder='Email Address' autofocus={isCheckboxChecked}/>
      <br/>
      </div>


      <input type="checkbox" name="checkbox" onChange={handleChange}/>

<label className='term'>
  By clicking this box, you agree UseRecipes to collect your name and email to receive our latest newsletter!
</label>



    {/* <h3>Subscription</h3>
    <input value= "one month" onChange= {handleChange} name='sub' type='radio' /><label>one month</label><br />
    <input value= "six month"  onChange= {handleChange} name='sub' type='radio' /><label>six month</label><br />
    <input value= "No"  onChange= {handleChange} name='sub' type='radio' checked={true}/><label>no thanks</label><br />
 */}

 
   <div class="button-container">
      <button type="submit">SIGN UP</button>
   </div>
       
    </form>

   

    </div>


    {showThankYou && (
      

        <div className="thank-you-popup">
          <p>Thank you for your submission</p>
          <button className='button-submit' onClick={() => setShowThankYou(false)}><Link to="/"> Back to Home</Link></button>
        </div>


      )}
     
    </>

        
    
  )
}