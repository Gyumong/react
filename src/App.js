import React, {Component} from 'react';
import Say from './Say';
/*
state는 컴포넌트 내부에서 바뀔 수 있는 값을 의미
바뀔때마다 컴포넌트는 re렌더링이 되고 바꿀때 마다 setState을 사용해야됨
안쓰면 re렌더링 하지않아서 원하는 값이 나타나지 않음
props는 부모가 전달해주는 값 state는 자기자신이 갖고 있는 값
props는 읽기전용 state는 변경할수도있음
*/
const App = () => {
  return <Say / >;
};

export default App;
