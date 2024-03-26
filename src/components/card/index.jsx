import './style.css';
import CardImg from './CardImg';
import CardInfo from './CardInfo';

function Card(props) {
  return <div className='card-container'>
    {/* ==> */}
    <CardImg {...props} />
    <CardInfo name={props.name} age={props.age} role={props.role} />
  </div>
}

export default Card;
