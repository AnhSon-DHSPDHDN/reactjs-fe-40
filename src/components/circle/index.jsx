import './style.css';

const Circle = (props) => {
  return <div className="circle" style={{ backgroundColor: props.color }}>
    {props.name}
  </div>
}

export default Circle;
