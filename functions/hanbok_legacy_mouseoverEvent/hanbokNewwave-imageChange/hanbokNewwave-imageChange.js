const containerSecond = document.getElementById('containerSecond');
const items = document.querySelectorAll('.items');
const sectionTwo = document.getElementById('sectionTwo');
// const section = Array.from(sections);

let colorArr = ['#BB272D', '#E3DDCB', '#3E465B', '#245441', '#6D1B43', '#161616'];

// console.log(section);
// const a = Array.from(containerSecond);
// containerSecond.addEventListener('mouseover', ()=>{
  // console.log(e);
  // let index = this.getAttribute('data-num');
  // console.log(index);

  
  // sectionTwo.style.backgroundColor = colorArr[i];
  // });
containerSecond.addEventListener('mouseover', (e)=>{
  let getDataset = e.target.dataset.num;
  console.log(getDataset);
  for(let i = 0; i < colorArr.length; i++){
    if(items[i].dataset.num === getDataset){
      sectionTwo.style.backgroundColor = colorArr[i];
    }
  }
});

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