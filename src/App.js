import React from "react";

// 이렿게 짧게 작성할 수 있는 코드는 모두 App 컴포넌트 안에 작성할 것
function Food({ fav }) {
  console.log(fav);
  return <h1>I like { fav }</h1>;
}

function App() {
  // return <div className="App" />;
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" somthing={true} papapapa={['hello', 1, 2, 3, 4, true]}/>
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi"/>

    </div>
  );
}

export default App;
