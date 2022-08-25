import './ProjectsLanguages.css';
import clsx from "clsx";

export default function ProjectsLanguages(props){
    const {value, type} = props;
    const classes = clsx("ProjectsLanguages", type);
return (<>
    <p className={classes}>{value}</p>
</>);
}
