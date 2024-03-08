import React from "react";

// App 클래스는 React.Component 클래스를 상속받음
// 클래스형 컴포넌트가 되려면 'App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속받아야 한다는 것'
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }))
  }

  componentDidMount() {
    console.log('component rendered')
  }

  componentDidUpdate() {
    console.log('I just updated');
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
