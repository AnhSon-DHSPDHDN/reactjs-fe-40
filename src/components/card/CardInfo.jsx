function CardInfo(props) {
  return <>
    <div className='card-container__des'>{props.name}</div>
    <div className='card-container__des'>Age: {props.age}</div>
    <div className='card-container__des'>{props.role}</div>
  </>
}

export default CardInfo;
