import React, { useRef} from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> JOIN US</span>
        </div>
        <div>
          <span> TO LEVEL UP</span>
          <span className="stroke-text"> YOUR BODY ?</span>
        </div>
      </div>
      <div className="right-j" id="email">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="text" placeholder="Enter your name here..." name="user_name" />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email here.."
          />
          <button type="submit" className="btn btn-j">
            Join now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
