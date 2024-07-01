import React from "react";
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "8cce6df6-55b1-464a-b689-cfbb94715339");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }

      };
    
    //     const data = await response.json();
    
    //     if (data.success) {
    //       setResult("Form Submitted Successfully");
    //       event.target.reset();
    //     } else {
    //       console.log("Error", data);
    //       setResult(data.message);
    //     }
    //   };
    

    
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1> Lets Talk</h1>
          <p>
          Great things are never done by one person. They are done by a team of people
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>qazimian101@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+923013844809 </p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Karachi, Sindh, Pakistan</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter Your Name" name="name"></input>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder="Enter Your Email" name="email"></input>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows='4' placeholder="Enter Your Message" ></textarea>
            <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
}};

export default Contact;
