import { Component } from "react";

class ComponentLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      count: 0
    }

    this.handleUpdateCount = this.handleUpdateCount.bind(this);
  }

  componentDidMount() {
    console.log("trigger Did mount run...");
  }

  componentDidUpdate() {
    console.log("trigger Did update run...");
  }

  componentWillUnmount() {
    console.log("trigger Will Unmount run...");
  }

  handleUpdateCount() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log(" ========> RENDER HTML");
    return <div>
      <h1>LifeCycle Count: {this.state.count}</h1>
      <button onClick={this.handleUpdateCount}>Update</button>
    </div>
  }
}

export default ComponentLifeCycle
