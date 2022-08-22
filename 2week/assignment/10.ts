// 10. 타입스크립트에서 promise보다 async/await를 사용하는게 더 나은 이유를 서술해보세요.

// 책 예시에서 나왔던 것처럼, 캐시 기능을 구현하는 함수를 구현하게 됐을 때, 
// 캐시가 없는 경우에는 비동기로 데이터를 받아와서 promise로 리턴하겠지만 캐시가 남아 있는 경우가 문제가 됩니다. 
// 캐시가 있는 경우에는 데이터를 리턴하게 되는데 수동으로 promise를 리턴하는 경우에는 캐시가 남아 있는 경우 보통의 데이터를 리턴하게 만들 수 있고 
// 이는 함수가 promise나 특정 데이터를 리턴하여 일관성을 잃도록 만들게 됩니다. 
// 만약 리턴 타입을 명확하게 명시했다면 오류를 발견 할 수 있었겠지만 그렇지 않았다면 결국 사용하는 쪽에서 에러가 발생하게 됩니다. 
// 이는 디버깅을 어렵게 만들 수 있습니다. 
// 그렇기 때문에 무조건 promise를 반환하는 async/await을 이용해서 일관성을 유지하도록 하고, 사람의 실수를 줄일 수 있습니다. 
// 또한, async / await 의 경우 동기 코드와 유사한 모습을 보이기 때문에 가독성에도 훨씬 좋습니다. 
// 마지막으로, promise를 리턴하는 경우에도 또 다른 promise로 래핑되지 않고 하나의 promise로 리턴됩니다.
