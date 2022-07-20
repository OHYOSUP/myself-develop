import {
  nextPage,
  prevPage
} from "../javascript/pageScrollEvent/pageScrollEvent.js";

import {
  scrollElemFadein
} from "./Hanbok/hanbok_element_scroll_fadein.js"

import {
  elementFade
} from "./Hanbok/elementFade.js";

import {
  colorChange
} from "./Hanbok/newWave/hanbokNewwave-imageChange.js";

import {
  legacySlide
} from "./Hanbok/legacy/hanbokLegacyParallSlide.js"

import {
  mouseoverEvent,
  mouseoutEvent
} from "./Hanbok/legacy/hanbok_legacy_mouseoverEvent.js";

import {
  legacyMainSlideNext,
  legacyMainSlidePrev
} from "./Hanbok/legacy/hanbok_legacy_mainPage_slide.js";

import {
  hanbok_naviEvent
} from "./Hanbok/hanbok_navigation/hanbok_navigation.js";

const root = document.getElementById('root');
const containerOne = document.getElementById('containerOne');
const containerTwo = document.getElementById('containerTwo');
const containerThree = document.getElementById('containerThree');
const containerFour = document.getElementById('containerFour');
const description_one = document.getElementById('description_one');
const hanbok_tradition = document.getElementById('hanbok_tradition');
const newWave_color = document.getElementById('newWave_color');
const colorContainer = document.querySelectorAll('.colorContainer');
const colorImage = document.getElementById('colorImage');
const hanbok_legacy_slide = document.getElementById('hanbok_legacy_slide');
const hanbok_legacy_lastpage = document.getElementById('hanbok_legacy_lastpage');
const image = document.querySelectorAll('.lastPage_image');
const imageName = document.querySelectorAll('.imageName');
const hanbok_newWave_mainPage = document.getElementById('hanbok_newWave_mainPage');
const hanbok_legacy = document.getElementById('hanbok_legacy');
const legacyLastPage_frameOne = document.getElementById('legacyLastPage_frameOne');
const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide li');
const prev = document.getElementById('prevBtn');
const next = document.getElementById('nextBtn');
const legacyMainContainer = document.getElementById('legacyMainContainer');
const description_two = document.getElementById('description_two')
const description_three = document.getElementById('description_three')
const legacyMain = document.getElementById('legacyMain');
const legacyAnchor = document.getElementById('legacyAnchor');


const lastPage_images = Array.from(image);
const lastPage_imageName = Array.from(imageName);

hanbok_naviEvent('click');


legacyMainSlideNext('click');
legacyMainSlidePrev('click');


nextPage(root, 'wheel', containerOne);
nextPage(newWave_color, 'wheel', legacyAnchor);

prevPage(hanbok_newWave_mainPage, 'wheel', containerFour);
prevPage(newWave_color, 'wheel', hanbok_newWave_mainPage);





const container = document.querySelectorAll('.container');
const containerArr = Array.from(container);
// const objectContainerArr = Object.assign({}, containerArr);
// console.log(objectContainerArr);

// console.log(containerArr);



let i = -1;

function indexCheck() {
  i++;
  if (i >= 3) {
    i = 3;
  }
  // console.log(i);
}

function indexCheckOpposite() {
  i--;
  if (i <= 0) {
    i = 0;
  }
  // console.log(i);
}

function boxVisible() {
  containerArr[i].style.opacity = 1;
  containerArr[i].style.transition = '0.5s';
}

function boxInVisible() {
  containerArr[i].style.opacity = 0;
  containerArr[i].style.transition = '0.5s';
}

let timer;

hanbok_tradition.addEventListener('wheel', function (e) {
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      if (e.deltaY > 0) {
        indexCheck();
        // console.log(e.deltaY);
        // console.log(i);
        nextPage(containerOne, 'wheel', containerTwo);
        nextPage(containerTwo, 'wheel', containerThree);
        nextPage(containerThree, 'wheel', containerFour);
        nextPage(containerFour, 'wheel', hanbok_newWave_mainPage);
        nextPage(hanbok_newWave_mainPage, 'wheel', newWave_color);
        // nextPage(newWave_color, 'wheel', legacyLastPage_frameOne);
        boxVisible(containerArr[i]);
      }
    }, 500);
  }
});

hanbok_tradition.addEventListener('wheel', function (e) {
  if (timer) {
    timer = setTimeout(function () {
      timer = null;
      if (e.deltaY < 0) {
        indexCheckOpposite();
        // console.log(e.deltaY);
        // console.log(i);
        prevPage(containerOne, 'wheel', root);
        prevPage(containerTwo, 'wheel', containerOne);
        prevPage(containerThree, 'wheel', containerTwo);
        prevPage(containerFour, 'wheel', containerThree);
        // prevPage(legacyLastPage_frameOne, 'wheel', newWave_color);
        // boxInVisible(containerArr[i]);
      }
    }, 500);
  }
})
// newWave Event


const legacy_container = document.querySelectorAll('.legacy_container')
// console.log(legacy_container);

const legacy_containerArr = Array.from(legacy_container);

let l = -1;

function legacy_indexCheck() {
  l++;
  if (l >= 4) {
    l = 4;
  }
  // console.log(i);
}

function legacy_indexCheckOpposite() {
  l--;
  if (l <= 0) {
    l = 0;
  }
  // console.log(i);
}

function legacy_boxVisible() {
  legacy_containerArr[l].style.opacity = 1;
  legacy_containerArr[l].style.transition = '0.5s';
}

hanbok_legacy.addEventListener('wheel', function (e) {
  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      if (e.deltaY > 0) {
        legacy_indexCheck();
        legacy_boxVisible(containerArr[l]);
        // console.log(e.deltaY);
        // console.log(l);
      }
    }, 500);
  }
});

// nextPage(legacyAnchor, 'wheel', hanbok_legacy_slide);
colorChange('mouseover');
legacySlide(hanbok_legacy_slide, 'wheel');
mouseoverEvent(lastPage_images);
mouseoutEvent(lastPage_images);