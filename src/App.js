import React from "react";

// 이렿게 짧게 작성할 수 있는 코드는 모두 App 컴포넌트 안에 작성할 것
function Potato() {
  return <h1>I like Potato</h1>
}

function App() {
  // return <div className="App" />;
  return (
    <div>
      <h1>Hello</h1>
      <Potato />
    </div>
  );
}

export default App;
