import './Footer.css';
export default function Footer(){
const items = [{name:"Mentions légales", link:"/legals"}, {name:"Plan du site", link:"/sitemap"}];

return (<>
<footer id="footer">
    <p className="Footer-copyright">2022, J-D25</p>
    <div className="Footer-socials">
        <a href="https://github.com/J-D25/" className="Contact-means-socials-link-circle" title="GitHub"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/jessy-daniel" className="Contact-means-socials-link-circle" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="https://www.instagram.com/jd.dev25/" className="Contact-means-socials-link-circle" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
    </div>
    <ul>{
        items.map((item, index) => <li key={index}><a href={item.link}>{item.name}</a></li>)
    }</ul>
</footer>
</>
)
}