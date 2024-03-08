import React from "react";
import axios from "axios";
import Movie from "./Movie";
import './App.css';

// App 클래스는 React.Component 클래스를 상속받음
// 클래스형 컴포넌트가 되려면 'App 클래스가 리액트가 제공하는 Component 클래스를 반드시 상속받아야 한다는 것'
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [], // 로딩된 영화 데이터를 저장할 수 있도록
    // setState 함수로 필요할 때 추가하면 안되는 건가요?
    // 별로 좋지 않은 방법 - 미리 데이터를 정의하는 것이 좋음
  };

  getMovies = async () => { // 자바스크립트에게 getMovies() 함수는 시간이 필요하고
    // axios.get() 의 실행을 기다려 달라고 말해주는 것
    // 이런 식으로 구조 분해 할당 사용하는 것이 좋음
    const {
      data: { // 여기서 data -> 
        data: { movies }, // 여기서 data -> movies 진행
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // ES6 에서는 객체의 키와 대입할 변수의 이름이 같다면 코드를 축약할 수 있음
    this.setState({movies, isLoading: false}); // movies, isLoading state 를 변경
  }

  // 첫 번째 인자로 setTimeout(...) 을 전달
  // 두 번째 인자로 6000 밀리초 전달
  componentDidMount() {
    // 영화 데이터 로딩! : 영화 데이터 로딩이 완료되면
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    // We are ready 부분에 영화 데이터를 출력할 것
    return (
      <section>
        {isLoading
        ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        )
        : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default App;
