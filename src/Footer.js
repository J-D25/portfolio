function Footer(){
const items = [{name:"Mentions légales", link:"#"}, {name:"Plan du site", link:"#"}];

return (<>
<p className="Footer-copyright">2022, J-D25</p>
<ul>{
        items.map((item, index) => <li key={index}><a href={item.link}>{item.name}</a></li>)
    }</ul>
</>
)
}

export default Footer;