import React from "react";

// class MainComponent extends PureComponent {
//   render() {
//     for (let i = 0; i < 30000; i++) {
//       console.log("Tinh toan data!!!");
//     }

//     console.log("Main rerender ne!!!!!!!");

//     return <h1>Main Component</h1>
//   }
// }

// export default MainComponent


const MainComponent = (props) => {

  for (let i = 0; i < 20000; i++) {
    console.log("Tinh toan data!!!");
  }

  console.log("Main rerender ne!!!!!!!");
  return <h1>Main Component</h1>
}

export default React.memo(MainComponent)
