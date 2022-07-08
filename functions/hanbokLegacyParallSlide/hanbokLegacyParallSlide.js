const hanbok_legacy_slide = document.getElementById('hanbok_legacy_slide');
// console.log(container);

let i = 0;
let isStatus = true;


export function legacySlide(targetElem, eventType){

  targetElem.addEventListener(eventType, (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      legacyBgSlide();
      isStatus = true;
      targetElem.style.transform = `translateX(${-i}px)`
      // console.log(i);
    }
    if (e.deltaY < 0) {
      legacyBgSlideOpposite();
      isStatus = false;
  
      targetElem.style.transform = `translateX(${-i}px)`
      // console.log(i);
    }
  });
}

function legacyBgSlide() {
  requestAnimationFrame(legacyBgSlide);
  if (i < 800 && isStatus === true) {
    i++;
    console.log(i);
    hanbok_legacy_slide.style.transform = `translateX(${-i}px)`;
    if (i >= 800) {
      i = 800
    }
  }
};

function legacyBgSlideOpposite() {
  requestAnimationFrame(legacyBgSlideOpposite);
  i--;
  console.log(i);
  hanbok_legacy_slide.style.transform = `translateX(${-i}px)`;
  if (i <= 0) {
    i = 0;
  }
};


// legacyBgSlide();
