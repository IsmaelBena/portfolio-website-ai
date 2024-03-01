import './Title.css';

import { Link } from "react-router-dom";

function Title() {

  return (
    <div className='Title'>
        <div className='TitleAccent TitleSize'></div>
        <div className='TitleContent TitleSize'>
            <p className='TitleText'>Projects</p>
        </div>
    </div>
  );
}

export default Title;