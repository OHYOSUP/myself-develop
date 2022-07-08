const hanbok_tradition = document.getElementById('hanbok_tradition');
const containerOne = document.getElementById('containerOne');



function ElementEvent (){
  containerOne.style.opacity = 1;
  containerOne.style.transition = '0.5s';
}


export function elementFade(elem){
  let timer;

  hanbok_tradition.addEventListener('wheel', function (e) {
    if (!timer) {
      timer = setTimeout(function() {
        timer = null;
        ElementEvent();
      }, 200);
    }
  });
}
  


