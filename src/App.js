import React from 'react';
import './App.css';
//JSX란 함수에서 반환하는 내용을 보여주는 HTML 같은 코드
//사용시 장점은 매우 편하게 UI를 렌더링 할 수 있다.
/* 문법
<감싸인 요소>
컴포넌트에 여러 요소가 있다면 반드시 부모 요소 하나로 감싸야 한다.
<JavaScript 표현>
JSX안에서 JavaScript 표현식을 쓸 수 있다. jsx내부에 {}로 감싸면 된다.
<if문 대신 조건부 연산자 사용>
<AND 연산자(&&)를 사용한 조건부 렌더링>
특정 조건을 만족할때 내용을 보여주고 아닐땐 안보여주고 싶으면 && 연산자 사용
<undefined를 렌더링하지 않기>
어떤값이 undefined 일 수도 있는데 그땐 undefined만 반환하여 렌더링 하는 상황을
만들면 안됨. 그럴땐 ||연산자 사용으로 해당 값이 undefined일 때 사용할 값을 지정
반면 jsx 내부에서 undefined를 렌더링하는 것은 괜찮음.
<인라인 스타일링>
리액트에서 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라
객체 형태로 넣어주어야 됨. 카멜표기법으로 작성
<class대신 className으로 설정해 주어야 함.>
<태그는 반드시 닫아주기.>
주석 작성시 {/*...  같은 식으로 작성
ctrl +Art +b로 들여쓰기*/

function App() {
  const name = '리액트';
  return (<> < div className = "react" > {
    name
  }</div> < input /> </>);
}

export default App;
