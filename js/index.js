const $iniciar = document.querySelector('.start');
const $content = document.querySelectorAll('.wrapper-roulette ul li');

let n = 0; 
let stop;
let random;

function varRoulete() {
  stop = 0;
  random = Math.floor((Math.random() * 50) + 10);
};

$iniciar.addEventListener('click', event => { 
  event.preventDefault(); 
  varRoulete();
  clearInterval(startRoulette);
  startRoulette = setInterval(roulette, 100);
});  

var startRoulette;
 
function roulette() { 
    if(n < 10 && stop != random){
        [].map.call($content, function(v, index, array) {
            v.classList.remove("active");
            array[n].classList.add("active"); 
            document.querySelector("body").classList.remove("active");
            v.classList.remove("select");
        }) 
        n++;
        stop++; 
    } else {
        n = 0;
        finish();
    }
};  

function finish() {
    if(stop == random) {
        const $select = document.querySelector('.wrapper-roulette ul .active');
        setTimeout(function(){
            $select.classList.add("select");
            document.querySelector("body").classList.add("active");
        }, 500)
    }
}





