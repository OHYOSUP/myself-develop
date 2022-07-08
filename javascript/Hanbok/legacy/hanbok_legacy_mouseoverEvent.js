const image = document.querySelectorAll('.lastPage_image');
const imageName = document.querySelectorAll('.imageName');

const lastPage_images = Array.from(image);
const lastPage_imageName = Array.from(imageName);


// console.log(lastPage_images);
// console.log(lastPage_imageName);



export function mouseoverEvent(elem){
  for(let i = 0; i < lastPage_imageName.length; i++){
      elem[i].addEventListener('mouseover', ()=>{
        lastPage_imageName[i].style.opacity = 1;
        lastPage_imageName[i].style.transition = '0.5s';
      });
  }
}

export function mouseoutEvent(elem){
  for(let i = 0; i < lastPage_imageName.length; i++){
      elem[i].addEventListener('mouseout', ()=>{
        lastPage_imageName[i].style.opacity = 0;
        lastPage_imageName[i].style.transition = '0.5s';
      });
  }
}