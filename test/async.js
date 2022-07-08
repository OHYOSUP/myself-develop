function a() {
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      console.log('지금 함수 a()가 실행되었습니다.');
      resolve('성민씨메롱');
    },4000);
  });
}
// '성민씨 메롱' 이라는 String이 매개변수가 되어

a()
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('여기는 지금 then이라는 함수 안에서 실행된겁니다. 1')
        resolve(data);
      },1000)
    })
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('여기는 지금 then이라는 함수 안에서 실행된겁니다. 2')
        resolve(data);
      },1000)
    })
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('여기는 지금 then이라는 함수 안에서 실행된겁니다. 3')
        resolve(data);
      },1000)
    })
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('여기는 지금 then이라는 함수 안에서 실행된겁니다. 4')
        resolve(data);
      },1000)
    })
  })
  .then(function(data){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
        console.log('여기는 지금 then이라는 함수 안에서 실행된겁니다. 5')
        resolve(data);
      },1000)
    })
  });

// data의 값으로 나온다

//* setTimeout을 4000으로 해놨고 아래는 1000으로 해놨으니 원래대로라면
//* a().then()이 먼저 실행되고 a()가 실행되아야 하는데
//* Promise를 달아서 a()가 실행되고 a(),then()이 실행된다.

//! Promise().then().then().then().then().then()....
//! return에 약속을 달면 순서를 지킨다.
//! then()이 붙은 순서로 계속 순서를 지키도록 만들 수 있다

// ? Promise
// ? 실행을 일단 멈춘다 : pending : 대기하다
// ? 호출 순서를 사람이 작성한 것이 맡기는 것

//! Promise를 달면 순서를 지키기 시작한다
// ! 에디터는 위에서 아래로 코드를 읽어 내려가는게 기본값.
// ! Promise는 이 기본값을 아주 충실하게 지키게 하는 것이 Promise

//! Promise의 세 가지 상태
//! 1. 대기 : pending
//! 2. 성공 : fulfilled(resolve)
//! 3. 실패 : reject(reject)
//! 비동기 방식 : 병렬 처리 : 동시에 할래
//! 동기 방식 : 직렬 처리 : 순서대로 할래

//*  node.js 는 논블로킹 방식의 input/output을 가지고 있다
//*  논블로킹 = '비동기 방식'
//*  node.js 입출력이 끝내줌, 순서를 어기고 먼저 끝나는 대로 처리 해주는 방식
