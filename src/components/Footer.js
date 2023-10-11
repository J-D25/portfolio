import './Footer.css';
import {Link} from "react-router-dom";
export default function Footer(){
const items = [{name:"Mentions légales", link:"/legals"}, {name:"Plan du site", link:"/sitemap"}];

return (<>
<footer id="footer">
    <p className="Footer-copyright">2023, J-D25</p>
    <div className="Footer-socials">
        {process.env.REACT_APP_SOCIALS_GITHUB && <a href={process.env.REACT_APP_SOCIALS_GITHUB} className="Contact-means-socials-link-circle" title="GitHub"><i className="fa-brands fa-github"></i></a>}
        {process.env.REACT_APP_SOCIALS_LINKEDIN && <a href={process.env.REACT_APP_SOCIALS_LINKEDIN} className="Contact-means-socials-link-circle" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>}
        {process.env.REACT_APP_SOCIALS_INSTAGRAM && <a href={process.env.REACT_APP_SOCIALS_INSTAGRAM} className="Contact-means-socials-link-circle" title="Instagram"><i className="fa-brands fa-instagram"></i></a>}
    </div>
    <ul>{
        items.map((item, index) => <li key={index}><Link to={item.link}>{item.name}</Link></li>)
    }</ul>
</footer>
</>
)
}