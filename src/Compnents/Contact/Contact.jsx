import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import White_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e4aaa946-947a-451d-93e2-335b39a835c0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
         <h3>Send us a message <img src={msg_icon} alt="" /></h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum magnam facere libero velit eaque nulla
            , hic dolore quaerat, omnis numquam sapiente accusantium quibusdam, 
            error voluptate beatae. Facilis, voluptatibus neque!</p>
            <ul>
                <li><img src={mail_icon} alt="" /> Contact@GreatStack.dev</li>
                <li> <img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" />Bahari, Miniet Elnasr <br />
                Mansoura, Egypt.</li>
            </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label >Your name</label>
            <input type="text" name="name" placeholder='Enter Your name'
            required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6"
             placeholder='Enter your message' required></textarea>
             <button type="submit" className='btn dark-btn'>
                Submit now <img src={White_arrow} alt="" />
             </button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact