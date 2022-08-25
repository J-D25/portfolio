import './ProjectsCards.css';
import ProjectsLanguages from './ProjectsLanguages';
import ExternalLink from '../assets/ExternalLink.svg';
import GitHub from '../assets/GitHub.svg';
export default function ProjectsCards(props){
const {illustration, title, link, github, text, lang, skill} = props.project;
return (<>
    <div className="ProjectsCards">
        <div className="ProjectsCards-illustration">
            {illustration}
        </div>
        <div className="ProjectsCards-content">
            <div className="ProjectsCards-content-title">
                <h2>{title}</h2>
                <a href={link[0]} alt={link[1]}><img src={ExternalLink} alt="Lien externe"/></a>
                {github !== false ? <a href={github} alt="Repo sur GitHub"><img src={GitHub} alt="GitHub"/></a> : null}
            </div>
            <p>{text}</p>
            <div className="ProjectsCards-languages">
                {lang.map((item, index) => <ProjectsLanguages type="lang" value={item}/>)}
            </div>
            <div className="ProjectsCards-languages">
                {skill.map((item, index) => <ProjectsLanguages type="skill" value={item}/>)}
            </div>
        </div>
    </div>
</>);
}
