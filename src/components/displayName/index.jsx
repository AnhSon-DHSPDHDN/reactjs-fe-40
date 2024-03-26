// import { Component } from 'react';

// class DisplayName extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//   }

//   render() {
//     return <h3>Tran Van Anh Son</h3>
//   }
// }
import './style.css';

function DisplayName(props) {
  console.log(props, "props")
  return <h3 className='display-name'>{props.name} - {props.age}</h3>
}

export default DisplayName;
