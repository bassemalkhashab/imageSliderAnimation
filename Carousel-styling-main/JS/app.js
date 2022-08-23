let leftArrow = document.querySelector('.arrow-left');
let rightArrow = document.querySelector('.arrow-right');
let imageSlider = document.querySelector('.sliderimages');

let position = 1;
const imageWidth = 622.213;

rightArrow.addEventListener('click',()=>{
    imageSlider.style.transform = 'translateX(-'+ position*imageWidth +'px)';
    imageSlider.style.transition = 'transform 0.4s ease';
    position++;
    if (position > 4){
        position = 1;
    }
})
