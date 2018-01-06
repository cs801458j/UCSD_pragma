# React란?

- 리액트는 Reactive한 단방향 데이터 흐름을 가지고 있다.
- Reactive == 상태가 바뀌면, 뷰도 함께 업데이트 된다는것
- 단방향 == 한 방향으로 데이터가 흐른다.
- 상태(state)는 상위 컴포넌트에서 하위 컴포넌트로 흐른다. 이 데이터는 prop으로 지칭되고, HTML의 attribute처럼 작성된다.

```
// 참고: 동적으로 생성되는 모델의 경우 보통은 `Array.prototype.map` 을 이용하여
// 배열 형태 모델을 작성하고, key를 배정하지만 글의 목적에 맞게 간단하게 쓰기 위하여
// 정적으로 작성합니다.
var ShoppingCart = React.createClass({
    render () {
        return <div>
            <ShoppingItem name="kimchi" available={true} />
            <ShoppingItem name="rice" available={true} />
            <ShoppingItem name="curry" available={false} />
        </div>
    }
});

// 참고: 기존 html 엘리먼트가 아닌 한, 모든 커스텀 컴포넌트들의 이름은 대문자로
// 쓰여져야 하며 지켜지지 않으면 에러가 납니다.
var ShoppingItem = React.createClass({
    render () {
        return <div>
            <div>
                상품명: {this.props.name},
                구입가능: {this.props.available ? '가능' : '불가능'}
            </div>
        </div>
    }
});
```

- 컴포넌트는 ShoppingCart -> ShoppingItem의 위계를 가진다.
