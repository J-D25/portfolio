import {useState, useRef} from "react";
import './App.css';
import './Contact.css';
import Mail from "../data/mail.php"
import illustration from "../assets/contact.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formContact = useRef(null)
  function handleFormSubmit(e){
      e.preventDefault();
      const data = new FormData(formContact.current);
        fetch(Mail, { method: "POST", body: data })
            .then(response => response.json())
            .then((results) => {
                if (results.responseServer === true && results.responseMailer === true) {
                  setName("");
                  setFirstName("");
                  setEmail("");
                  setMessage("");
                }
            });
        return false;
  }
  
  return (<>
    <div className="App-content">
      <h1>Contact</h1>
      <p className="App-subtitle">Vous souhaitez discuter ? Remplissez le formulaire ci-dessous.</p>
      <div className="Contact-means">
        <form ref={formContact} onSubmit={handleFormSubmit}>
          <div className="Contact-means-formInput">
            <label htmlFor="form-name">Nom</label>
            <input type="text" id="form-name" name="lname" value={name} onChange={e => setName(e.target.value)} placeholder="Tyler" required/>
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-firstname">Prénom</label>
            <input type="text" id="form-firstname" name="fname" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Bonnie" required/>
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-email">Email</label>
            <input type="email" id="form-email" name="mail" value={email} onChange={e => setEmail(e.target.value)} placeholder="bonnie.tyler@music.com" required/>
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-message">Message</label>
            <textarea type="text" id="form-message" name="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Somewhere after midnight in my wildest fantasy" required rows="5"/>
          </div>
          <input type="submit" className="button" value="Valider"/>
        </form>
        <div className="Contact-means-socials">
          <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i className="fa-brands fa-github"></i>
            </div>
            <a href="https://github.com/J-D25/">GitHub</a>
          </div>
          
          <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <a href="https://www.linkedin.com/in/jessy-daniel">LinkedIn</a>
          </div>
          
          <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <a href="https://www.instagram.com/jd.dev25/">Instagram</a>
          </div>
        </div>
      </div>
    </div>
    <img className="App-illustration" alt="Femme derrière un écran d'ordinateur munie d'un casque audio qui tend la main pour attraper une lettre." width="457.266" height="400" src={illustration}></img>
    </>);
}