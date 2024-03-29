import './Socials.css';
import ContactCard from '../Components/ContactCard';
import Title from '../Components/Title';

import linkedinIcon from '../Icons/linkedin-icon.png'
import emailIcon from '../Icons/email-icon.png'
import githubIcon from '../Icons/github-icon.png'

function Socials() {
  return (
    <div className='Socials'>
        <div className='TitleFadeDiv'></div>
        <Title title={"Socials"}/>
        <div className='ContactCardsContainer'>
            <ContactCard icon={linkedinIcon} platform={"Ismael Benadjal"} url={"https://www.linkedin.com/in/ismael-benadjal/"} />
            <ContactCard icon={githubIcon} platform={"IsmaelBena"} url={"https://github.com/IsmaelBena"} />
            <ContactCard icon={emailIcon} platform={"Ismael.Benadjal@gmail.com"} url={"mailto:ismael.benadjal@gmail.com"} />
        </div>
    </div>
  );
}

export default Socials;