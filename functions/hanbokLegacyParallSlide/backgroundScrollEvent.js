const backgroundCity = document.querySelector('.img');


let i = 0;
let isStatus = true;

export function backgoundAnimation() {

  requestAnimationFrame(backgoundAnimation);
  if (i < 400 && isStatus === true)
    i++;
  backgroundCity.style.transform = `translateX(${-i}px)`;
  // console.log(i);
  if (i === 400) {
    isStatus = false;

    backgroundCity.style.opacity = 0;
    backgroundCity.style.transition = '1s';


  }
}
// 백그라운드 슬라이드







// backgroundCity.style.width = '150vw';
// backgroundCity.style.height = '150vh';
// backgroundCity.style.position = 'absolute'
// backdropBox.style.position = 'absolute';

// console.log(backdropBox);



// function gotodown (){
//   main.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
// }





// export function backgoundAnimation(translateXvalue,opacityValue, animationlength) {
//   // let isStatus = true;
//   requestAnimationFrame(backgoundAnimation);
//   if (i < 400 && isStatus === true) {
//     i++;
//     backgroundCity.style.transform = translateXvalue;
//     console.log(i);
//     if (i === 400) {
//       isStatus = false;
//       // cancelAnimationFrame(backgoundAnimation);
//       backgroundCity.style.opacity = opacityValue;
//       backgroundCity.style.transition = animationlength;
//       // main.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
//     }
//   }
// }
