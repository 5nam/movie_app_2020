import React from "react";

// App 클래스는 React.Component 클래스를 상속받음
// 클래스형 컴포넌트가 되려면 'App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속받아야 한다는 것'
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], // 로딩된 영화 데이터를 저장할 수 있도록
    // setState 함수로 필요할 때 추가하면 안되는 건가요?
    // 별로 좋지 않은 방법 - 미리 데이터를 정의하는 것이 좋음
  };

  // 첫 번째 인자로 setTimeout(...) 을 전달
  // 두 번째 인자로 6000 밀리초 전달
  componentDidMount() {
    // 영화 데이터 로딩! : 영화 데이터 로딩이 완료되면
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000)
  }

  render() {
    const { isLoading } = this.state;
    // We are ready 부분에 영화 데이터를 출력할 것
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
