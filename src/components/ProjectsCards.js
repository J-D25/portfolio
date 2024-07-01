import './ProjectsCards.css';
import ProjectsLanguages from './ProjectsLanguages';
import ExternalLink from '../assets/ExternalLink.svg';
import GitHub from '../assets/GitHub.svg';
export default function ProjectsCards(props) {
    const { illustration, title, link, github, frontendmentor, text, lang, skill } = props.project;
    return (<>
        <div className="ProjectsCards">
            {illustration && illustration.url &&
                <div className="ProjectsCards-illustration">
                    <a href={link} className="ProjectsCards-illustration-link ProjectsCards-content-title" title={title + ", ouvrir dans un nouvel onglet"} target="_blank" rel="noreferrer"><img src={illustration.url} width={illustration.width} height={illustration.height} alt={illustration.alt ? illustration.alt : "Capture du site " + title + " en format desktop."} /></a>
                </div>}
            <div className="ProjectsCards-content">
                <div className="ProjectsCards-content-title">
                    <h2>
                        <a href={link} className="ProjectsCards-content-title" title={title + ", ouvrir dans un nouvel onglet"} target="_blank" rel="noreferrer">{title} <img src={ExternalLink} width="25" height="25" alt="Lien externe" /></a>
                    </h2>
                    {github !== false ? <a href={github} title={"Voir le repo " + title + " sur GitHub"}><img src={GitHub} width="27" height="25" alt="GitHub" /></a> : null}
                </div>
                <p>{text}</p>
                {frontendmentor !== false ? <p>Défi <a href={frontendmentor} title="Défi Frontend Mentor">Frontend Mentor</a>.</p> : null}
                <div className="ProjectsCards-languages">
                    {lang.map((item, index) => <ProjectsLanguages key={index} type="lang" value={item} />)}
                </div>
                <div className="ProjectsCards-languages">
                    {skill.map((item, index) => <ProjectsLanguages key={index} type="skill" value={item} />)}
                </div>
            </div>
        </div >
    </>);
}
