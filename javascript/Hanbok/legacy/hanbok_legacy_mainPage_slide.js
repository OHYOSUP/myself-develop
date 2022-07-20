const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide li');
const prev = document.querySelector('.prevBtn');
const next = document.querySelector('.nextBtn');

// console.log(prev);

let currentIndex = 0;
let slideCount = slideImg.length;
// console.log(slideImg);

let slideWidth = 30;
let slideMargin = 2;

function makeClone(){
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_last = slide.lastElementChild.cloneNode(true);
  slide.append(cloneSlide_first);
  slide.insertBefore(cloneSlide_last, slide.firstElementChild);
}

function initfunction(){
  slide.style.widht = slideWidth * (slideCount + 1) + 'vw';
  slide.style.left = -slideWidth + 'vw';
}

makeClone();
initfunction();

export function legacyMainSlideNext(eventType){
  next.addEventListener(eventType, function(){
  if(currentIndex < slideCount - 1 ){
    // console.log(currentIndex);
  
    slide.style.left = -(currentIndex + 2) * (slideMargin + slideWidth) + 'vw';
    slide.style.transition = `${0.5}s ease-out`;
  }
  if(currentIndex === slideCount-1){
    // console.log(currentIndex);
      slide.style.left = -(slideMargin + slideWidth) + 'vw';
      // slide.style.transition = `${0}s ease-out`;
    currentIndex = -1;
  }
  currentIndex += 1;
  });
}

export function legacyMainSlidePrev (eventType){
  
  prev.addEventListener(eventType, function(){
    if(currentIndex > 0){
      slide.style.left = -currentIndex * (slideMargin + slideWidth) + 'vw';
      slide.style.transition = `${0.5}s ease-out`
      console.log(currentIndex);
    }
    if(currentIndex === 0){
      console.log(currentIndex);
  
      // setTimeout(function(){
        slide.style.left = -slideCount * (slideMargin + slideWidth) + 'vw';
        slide.style.transition = `${0}s ease-out`;
      // },200);
      currentIndex = slideCount;
    }
    currentIndex -= 1;
  })
}





