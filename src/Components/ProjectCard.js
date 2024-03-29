import './ProjectCard.css';

import { Link, useSearchParams } from "react-router-dom";

function ProjectCard() {

  return (
    <div className='ProjectCard'>
        <div className='AccentDiv ProjectCardSize'></div>
        <div className='ProjectCardContent ProjectCardSize'>
            <p className='ProjectName'>Image Classification of Landscapes</p>
            <p className='ProjectSummary'>Given an image of a Coast, Desert, Forest, Glacier or Mountains, this model will predict which environment it is. Developed in <span className='HighlightedKeyword'>Python</span> using Pytorch with application of techniques such as CNNS, Alexnet and VGG-16/19.</p>
        </div>
    </div>
  );
}

export default ProjectCard;