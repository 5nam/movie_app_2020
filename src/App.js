import React from "react";
import PropTypes from 'prop-types';

// 이렿게 짧게 작성할 수 있는 코드는 모두 App 컴포넌트 안에 작성할 것
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like { name }</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name}/>
    </div>
  );
}

// 서버에서 데이터가 넘어온다고 가정하고 데이터 작성
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://www.shutterstock.com/image-photo/korean-kimchi-traditional-cabbage-on-260nw-2252859875.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://t3.ftcdn.net/jpg/05/00/83/40/360_F_500834060_MDelPQsZd5hLN7NPm6u5ECadZ3O9l8P2.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg',
    rating: 4,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://media.istockphoto.com/id/487660102/ko/%EC%82%AC%EC%A7%84/%EC%9D%BC%EB%B3%B8-%EC%9D%8C%EC%8B%9D-%EB%8F%BC%EC%A7%80%EA%B3%A0%EA%B8%B0-%EC%9D%BC%EC%8B%9D-%EB%8F%88%EA%B9%8C%EC%8A%A4.jpg?s=612x612&w=0&k=20&c=FUfqxVLHtbEt9GIiFcM3P9aYFusHK_zhNOBrjSJMg3M=',
    rating: 3,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'https://previews.123rf.com/images/nontoxicguy/nontoxicguy1704/nontoxicguy170400331/76957445-%EA%B9%80%EB%B0%A5.jpg',
    rating: 5,
  },
]; // foodILike 변수에 빈 배열 저장

/*
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
// const renderFood = dish => <Food name={dish.name} picture={dish.image} />;
// 위와 똑같은 기능을 함
*/

function App() {
  // return <div className="App" />;
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number, // 
};

export default App;
