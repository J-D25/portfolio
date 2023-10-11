import { useState, useRef, useEffect } from "react";
import './App.css';
import './Contact.css';
import Mail from "../data/mail.php"
import illustration from "../assets/contact.svg";
import placeholders from "../data/contactPlaceholders.json";

export default function Contact() {

  useEffect(() => {
    const Rand = Math.floor(Math.random() * (placeholders.length));
    setRand(Rand);
  }, []);
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorFirstName, setErrorFirstName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [rand, setRand] = useState(0);
  const mailpattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const [successMail, setSuccessMail] = useState(false);

  useEffect(() => {
    if (successMail) {
      var timer = setTimeout(() => {
        setSuccessMail(false);
        setName("");
        setFirstName("");
        setEmail("");
        setMessage("");
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    }
  }, [successMail]);

  function handleNameChange(e) {
    setName(e.target.value);
    setErrorName(false);
  }
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setErrorFirstName(false);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setErrorEmail(false);
  }
  function handleMessage(e) {
    setMessage(e.target.value);
    setErrorMessage(false);
  }
  const formContact = useRef(null)
  function handleFormSubmit(e) {
    e.preventDefault();
    /* Vérification des champs */
    let errors = 0;
    if (name === "") {
      setErrorName(true);
      errors++;
    }
    if (firstName === "") {
      setErrorFirstName(true);
      errors++;
    }
    if (!email.match(mailpattern)) {
      if (email === "") {
        setErrorEmail(true);
      } else {
        setErrorEmail(1);
      }
      errors++;
    }
    if (message === "") {
      setErrorMessage(true);
      errors++;
    }

    /* Si aucune erreur n'est détectée, on peut lancer la requête */
    if (errors === 0) {
      const data = new FormData(formContact.current);
      fetch(Mail, { method: "POST", body: data })
        .then(response => response.json())
        .then((results) => {
          if (results.responseServer === true && results.responseMailer === true) {
            setSuccessMail(true);
          }
        });
    }
    return false;
  }

  return (<>
    <div className="App-content">
      <h1>Contact</h1>
      <p className="App-subtitle">Vous souhaitez discuter ? Remplissez le formulaire ci-dessous.</p>
      {successMail && <span className="Contact-success">Votre message a bien été envoyé {firstName}, merci.</span>}
      <div className="Contact-means">
        <form ref={formContact} onSubmit={handleFormSubmit} noValidate>
          <div className="Contact-means-formInput">
            <label htmlFor="form-name">Nom</label>
            <input type="text" id="form-name" name="lname" className={errorName && "error"} value={name} onChange={handleNameChange} placeholder={placeholders[rand].lname} required disabled={successMail} />
            {errorName && <span>Le champ nom est obligatoire.</span>}
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-firstname">Prénom</label>
            <input type="text" id="form-firstname" name="fname" className={errorFirstName && "error"} value={firstName} onChange={handleFirstNameChange} placeholder={placeholders[rand].fname} required disabled={successMail} />
            {errorFirstName && <span>Le champ prénom est obligatoire.</span>}
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-email">Email</label>
            <input type="email" id="form-email" name="mail" className={errorEmail !== false && "error"} value={email} onChange={handleEmailChange} placeholder={placeholders[rand].mail} required disabled={successMail} />
            {errorEmail && (errorEmail === 1 ? <span>{email} n'est pas une adresse email valide.</span> : <span>Le champ email est obligatoire.</span>)}
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-message">Message</label>
            <textarea type="text" id="form-message" name="message" className={errorMessage && "error"} value={message} onChange={handleMessage} placeholder={placeholders[rand].message} required rows="5" disabled={successMail} />
            {errorMessage && <span>Le champ message est obligatoire.</span>}
          </div>
          <input type="submit" className="button" value="Valider" disabled={successMail} />
        </form>
        <div className="Contact-means-socials">
          {process.env.REACT_APP_SOCIALS_GITHUB && <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i className="fa-brands fa-github"></i>
            </div>
            <a href={process.env.REACT_APP_SOCIALS_GITHUB}>GitHub</a>
          </div>}

          {process.env.REACT_APP_SOCIALS_LINKEDIN && <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <a href={process.env.REACT_APP_SOCIALS_LINKEDIN}>LinkedIn</a>
          </div>}

          {process.env.REACT_APP_SOCIALS_INSTAGRAM && <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <a href={process.env.REACT_APP_SOCIALS_INSTAGRAM}>Instagram</a>
          </div>}
        </div>
      </div>
    </div>
    <img className="App-illustration" alt="Femme derrière un écran d'ordinateur munie d'un casque audio qui tend la main pour attraper une lettre." width="457.266" height="400" src={illustration}></img>
  </>);
}