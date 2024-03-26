import './Projects.css';
import ProjectCard from '../Components/ProjectCard';
import Title from '../Components/Title';

function Projects() {
  return (
    <div className='Projects'>
        <div className='TitleFadeDiv'></div>
        <Title />
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