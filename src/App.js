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
props를 렌더링할때 jsx 내부에서 {}기호로 감싸준다.
<props 기본값 설정 : defaultProps>
props 값을 지정하지 않았을때 기본 값지정법
MyComponent.defaultProps = {
 name: "기본 이름"
};
<태그 사이의 내용을 보여주는 children>
리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이의 내용을 보여주는 prop는 children
<비구조화 할당 문법>
함수형 컴포넌트에서 props 사용시 파라미터 부분에서 비구조화 할당 문법 사용 예정
<propTypes를 통한 props 검증>
컴포넌트의 필수 props를 지정하거나 props의 타입을 지정할때는 proptypes를 사용
MyComponent.propTypes={
name:propTypes.string
};
이렇게 설정하면 name 값은 무조건 문자열 형태로 전달해야 됨을 의미
<class형 컴포넌트에서 props 사용하기>
class형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회
note:default와propTypes는 꼭 사용해야 하나?
필수는 아니지만 React를 사용하여 큰 프로젝트 진행시,특히 다른 개발자와 협업시
해당 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있어 개발 능률이 좋아짐.
*/
const App = () => {
  return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
};

export default App;
