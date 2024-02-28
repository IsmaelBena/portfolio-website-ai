import './ProjectCard.css';

import { Link } from "react-router-dom";

function ProjectCard() {

  return (
    <div className='ProjectCard'>
        <div className='AccentDiv ProjectCardSize'></div>
        <div className='CardContent ProjectCardSize'>
            <p className='ProjectName'>Project Placeholder Name</p>
            <p className='ProjectSummary'>This is placeholder text for the project summary. This is placeholder text for the project summary. This is placeholder text for the project summary. This is placeholder text for the project summary. This is placeholder text for the project summary. This is placeholder text for the project summary. This is placeholder text for the project summary. </p>
        </div>
    </div>
  );
}

export default ProjectCard;