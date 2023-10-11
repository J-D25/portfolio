import './App.css';

export default function Legals() {
  return (<>
    <div className="App-content">
      <h1>Mentions légales</h1>
      <h2>1 - Édition du site</h2>
      <p>En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet {process.env.REACT_APP_URL} l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
      
      <p>Responsable publication : M. AUZANNEAU Jessy-Daniel</p>
      <p>Hébergeur : OVH SAS - 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1 - Téléphone : 1007</p>

      <h2>2 - Propriété intellectuelle et contrefaçons</h2>
      <p>Jessy-Daniel est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons, à l'exception des images illustratives dont les auteurs sont mentionnés dans la section Attributions.</p>

      <p>Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Jessy-Daniel.</p>

      <h2>3 - Limitations de responsabilité</h2>
      <p>Jessy-Daniel ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site {process.env.REACT_APP_URL}.</p>

      <p>Jessy-Daniel décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations et contenus présents sur {process.env.REACT_APP_URL}.</p>

      <p>Jessy-Daniel s'engage à sécuriser au mieux le site {process.env.REACT_APP_URL}, cependant sa responsabilité ne pourra être mise en cause si des données indésirables sont importées et installées sur son site à son insu.</p>

      <h2>4 - CNIL et gestion des données personnelles</h2>
      <p>Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l'utilisation du site. De plus, l'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour. Le site {process.env.REACT_APP_URL} est hébergé chez un prestataire sur le territoire de l'Union Européenne conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD : n° 2016-679)</p>

      <p>Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l'utilisateur du site {process.env.REACT_APP_URL} dispose d'un droit d'accès, de modification et de suppression des informations collectées.</p>

      <h2>5 - Liens hypertextes et cookies</h2>
      <p>Le site {process.env.REACT_APP_URL} contient des liens hypertextes vers d'autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d'autres sites vers {process.env.REACT_APP_URL}.</p>

      <p>La navigation sur le site {process.env.REACT_APP_URL} est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur.</p>

      <p>Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d'un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.</p>

      <p>Vous avez la possibilité d'accepter ou de refuser les cookies en modifiant les paramètres de votre navigateur. Aucun cookie ne sera déposé sans votre consentement.</p>

      <h2>6 - Attributions</h2>
      <ul>
        <li>404 error lost in space Flat Illustrations <a href="https://storyset.com/online">by Storyset</a></li>
        <li>Contact us Flat Illustrations <a href="https://storyset.com/online">by Storyset</a></li>
      </ul>
    </div>
    </>);
}