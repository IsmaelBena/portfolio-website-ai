import './Projects.css';
import ProjectCard from '../Components/ProjectCard';

function Projects() {
  return (
    <div className='Projects'>
        <h1>Projects</h1>
        <div className='ProjectCardsContainer'>
          <div className='ProjectRow'>
            <ProjectCard />
            <ProjectCard />
          </div>
          <div className='ProjectRow'>
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
    </div>
  );
}

export default Projects;