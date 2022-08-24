import './Header.css';
export default function Header(){
const items = [{name:"Projets", link:"#"}, {name:"À propos", link:"#"}, {name:"Contact", link:"#"}];
return (<>
    <p className="Header-logo">Jessy-Daniel</p>
    <ul>{
        items.map((item, index) => <li key={index}><a href={item.link}>{item.name}</a></li>)
    }</ul>
</>);
}