import './Title.css';

function Title(props) {

  return (
    <div className='Title'>
        <div className='TitleAccent TitleSize'></div>
        <div className='TitleContent TitleSize'>
            <p className='TitleText'>{props.title}</p>
        </div>
    </div>
  );
}

export default Title;