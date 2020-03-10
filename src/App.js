import React, {Component} from 'react';
import MyComponent from './MyComponent';
/*
class형 컴포넌트와 함수형 컴포넌트의 차이점은 class 컴포넌트의 경우 state 기능
및 라이프사이클 기능을 사용할 수 있다는 것과 임의 메서드를 정의할 수 있음.
class형 컴포넌트에서는 render 함수가 꼭 있어야함, 그안에서 보여 주어야 할 jsx를 반환
해야함.
함수 컴포넌트 장점 : 선언하기 편함 메모리 자원 아낌 배포시 결과물의 파일 크기가 더작음
단점:state와 라이프사이클 api 사용이 불가 Hooks 기능 도입후 해결
props는 properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소
props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정 할수 있다.
*/
const App = () => {
  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
};


export default App;
