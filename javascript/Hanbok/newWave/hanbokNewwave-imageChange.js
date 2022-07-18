const newWave_color = document.getElementById('newWave_color');
const colorContainer = document.querySelectorAll('.colorContainer');
const colorImage = document.getElementById('colorImage');
// const section = Array.from(sections);


// let test = ["../image/hanbok/hanbok_newWave/hanbok_newWave_0.svg","../image/hanbok/hanbok_newWave/hanbok_newWave_1.svg"];
let colorArr = ['#BB272D', '#E3DDCB', '#3E465B', '#245441', '#6D1B43', '#161616'];

  export function colorChange(eventType){
    newWave_color.addEventListener(eventType, (e)=>{
      let getDataset = e.target.dataset.num;
      // console.log(getDataset);
      for(let i = 0; i < 6; i++){
        if(colorContainer[i].dataset.num === getDataset){
          colorImage.style.backgroundColor = colorArr[i];
          // console.dir(colorImage.children[0]);
          colorImage.children[0].setAttribute('src',`../image/hanbok/hanbok_newWave/hanbok_newWave_${i}.svg`);
          colorImage.style.transition = '0.3s';
        }
      }
    });
  }

  // containerSecond.addEventListener('mouseover', (e)=>{
  //   let index = section[i].getAttribute('data-num');
  //   console.log(index);

  //   if(index === section.length){
  //     sectionTwo.style.backgroundColor = colorArr[i];
  //   }
  // });
// }

// section.forEach(function (elem) {
//   elem.addEventListener('mouseover', (e) => {
//     if (section.length === colorArr[i]) {
//       console.log(e);
//       sectionTwo.style.backgroundColor = 'colorArr[' + i + ']'
//     }
//   });
// })

// console.log(sectionTwo);