import './App.css';
import './Contact.css';
import illustration from "../assets/contact.svg";

export default function Contact() {
  return (<>
    <div className="App-content">
      <h1>Contact</h1>
      <p className="App-subtitle">Vous souhaitez discuter ? Remplissez le formulaire ci-dessous.</p>
      <div className="Contact-means">
        <form>
          <div className="Contact-means-formInput">
            <label htmlFor="form-name">Nom</label>
            <input type="text" id="form-name" placeholder="Tyler" required/>
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-firstname">Prénom</label>
            <input type="text" id="form-firstname" placeholder="Bonnie" required/>
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-email">Email</label>
            <input type="email" id="form-email" placeholder="bonnie.tyler@music.com" required/>
          </div>
          <div className="Contact-means-formInput">
            <label htmlFor="form-message">Message</label>
            <textarea type="text" id="form-message" placeholder="Somewhere after midnight in my wildest fantasy" required/>
          </div>
          <input type="submit" value="Valider"/>
        </form>
        <div className="Contact-means-socials">
          <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i class="fa-brands fa-github"></i>
            </div>
            <a href="/g">GitHub</a>
          </div>
          
          <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <a href="/g">LinkedIn</a>
          </div>
          
          <div className="Contact-means-socials-link">
            <div className="Contact-means-socials-link-circle">
              <i class="fa-brands fa-instagram"></i>
            </div>
            <a href="/g">Instagram</a>
          </div>
        </div>
      </div>
    </div>
    <img className="App-illustration" alt="Joli" height="400" src={illustration}></img>
    </>);
}
