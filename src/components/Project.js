import './App.css';
import ProjectsCards from "./ProjectsCards";
const allProjects = [{illustration:"X", title:"Basilique Saint-Ferjeux", link:["https://jessya.promo-159.codeur.online/basilique/", "Basilique"], github:"https://github.com/J-D25/basilique_integration/", text:"Réalisation d'un site Internet sur l'histoire de la Basilique Saint-Ferjeux dans le cadre d'un projet de découverte au cours de ma formation.",lang:["HTML", "CSS", "JavaScript"],skill:["Front"]},{illustration:"1", title:"Basilique Saint-Ferjeux", link:["https://jessya.promo-159.codeur.online/basilique/",  "Basilique"], github:"https://github.com/J-D25/basilique_integration/", text:"Réalisation d'une interface d'administration dans le cadre d'un projet de backoffice au cours de ma formation.",lang:["PHP", "SQL"],skill:["Back"]},{illustration:"1", title:"Villy-en-Auxois", link:["http://villyenauxois.free.fr/",  "Villy-en-Auxois"], github:false, text:"Conception, réalisation, intégration et maintenance du site de Villy-en-Auxois.",lang:["HTML", "CSS", "JavaScript", "PHP", "SQL"],skill:["Front", "Back"]},{illustration:"1", title:"Calculatrice de pourboires", link:["https://jessya.promo-159.codeur.online/tips/",  "Calculator tips"], github:false, text:"Création d'une calculatrice de pourboire en JavaScript pur.",lang:["HTML", "CSS", "JavaScript"],skill:["Front"]}, {illustration:"1", title:"Rock, paper, scissors", link:["https://jessya.promo-159.codeur.online/rock/",  "Rock"], github:false, text:"Création d'un jeu pierre feuille ciseaux en JavaScript pur en partenariat avec Madame Grangeret Isabelle.",lang:["JavaScript"],skill:["Front"]}]

export default function Project() {

  return (<>
    <div className="App-content">
      <h1>Mes projets</h1>
      <div className="Project-Cards">
        {allProjects.map((project, index) => <ProjectsCards key={index} project={project}/>)}
      </div>
    </div>
    </>);
}
