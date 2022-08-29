# 리액트를 활용한 localStorage 활용법

1. useState() 훅을 사용해 keyword와 setKeyword를 불러온다.
2. 리액트 이벤트를 활용해 input 값에 입력되는 value값들을 setKeyword에 할당해 실시간으로 반영될 수 있게 한다. input data에 입력되는 값들은 event.target.value 로 확인할 수 있다.
3. 실시간으로 반영되고 있는 keyword값을 useEffect() 훅을 이용해 localStorage.setItem("keyword") 하여 localStorage에 입력해준다.
4. keyword 값이 변할 때마다 로컬스토리지 내 업데이트 되어야하므로 의존성 배열에는 keyword값을 넣도록 한다.

# 커스텀 훅을 만들어보자

1. useLocalStorage 함수를 만든다. (훅은 use라는 접두사를 붙여 생성하는 것이 네이밍 규칙이다.)
2. 내부에 위 localStorage 활용법을 통해 만든 useState와 useEffect 훅을 붙여준다.
3. 이 useState와 useEffect는 재사용성을 위한 것이므로 인자와 변수들의 이름을 고민해 keyword 등의 이름과 바꿔준다.
4. 함수 매개변수를 넣어준다.
5. 훅은 형태는 const [ state, setState ] 이므로 return const [ state, setState ] 를 해준다.
6. 만들어진 커스텀 훅을 사용한다.

| 예시

```JS
  const [keyword, setKeyword] = useLocalStorage("keyword");
```
