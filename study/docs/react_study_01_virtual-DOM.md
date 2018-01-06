# React.js 스터디
=====================

## Virtual DOM(가상 돔) 이란?
-------------------------------

- 가상 돔은 리액트에서 나온 개념이 아니지만, 리액트에서 쓰이는 개념이다.
- 쉽게 말하면 HTML DOM의 추상화된 개념!
- HTML DOM보다 간편하게 사용할 수 있다. 리액트가 가상 개념과 진짜 돔 개념 간의 계산을 가능하게 해준다.

```
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
```

## HTML 코드를 React 컴포넌트로 만드는 방법

1. render 부분에 HTML을 반환해준다.
2. class 속성을 className으로 바꿔준다. (class는 js에서 사용되는 예약어라서..)

- DOM과의 차이점이 있다면,
* key, ref 그리고 dangerouslySetInnerHTML은 돔에 없는 속성이다.
* 리액트스러운 가상 돔은 몇 가지 제약을 더 소개해준다.

## ReactElement와 ReactComponent

- ReactElement와 ReactComponent의 차이점에 대해 알아보자!

### ReactElement

- 리액트의 표준 타입
- ReactElement는 가볍고, 상태가 없고, 불변이며 돔 요소의 가상 표현식

- ReactElement는 가상 돔 안에 포함되어 있고, 이 개념들이 노드를 생성한다.
- ReactElement의 불변성이 다루기 쉽고, 비교와 업데이트를 빠르게 만들어준다.(리액트의 퍼포먼스가 뛰어난 이유)

- 그렇다면, 어떤 것들이 ReactElement가 될 수 있을까? -> 모든 HTML 태그들!(ex. div, table, strong)

- ReactElement는 일반 돔으로 그려질 수 있다. 여기서부터는 리액트가 요소들을 관리하는 게 중단 되는 부분. (얘네들은 느린 돔노드가 된다.)

```
var root = React.createElement('div');
ReactDOM.render(root, document.getElementById('example'));
// If you are surprised by the fact that `render`
// comes from `ReactDOM` package, see the Post Scriptum.
```

- JSX는 HTML태그를 R
