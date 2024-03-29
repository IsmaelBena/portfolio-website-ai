import './ContactCard.css';

import { Link } from "react-router-dom";

function ContactCard(props) {

  return (
    <Link to={props.url} target='blank' className='ContactCard'>
        <div className='AccentDiv ContactCardSize'></div>
        <div className='ContactCardContent ContactCardSize'>
          <img src={props.icon} alt={'linkedin icon'} />
          <p className='ContactPlatform'>{props.platform}</p>
        </div>
    </Link>
  );
}

export default ContactCard;