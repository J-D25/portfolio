import './Footer.css';
export default function Footer(){
const items = [{name:"Mentions légales", link:"#"}, {name:"Plan du site", link:"#"}];

return (<>
<footer id="footer">
    <p className="Footer-copyright">2022, J-D25</p>
    <ul>{
        items.map((item, index) => <li key={index}><a href={item.link}>{item.name}</a></li>)
    }</ul>
</footer>
</>
)
}