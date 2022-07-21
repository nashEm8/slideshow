
/*--------- Pegando a quantidade de slides que vou ter --------------*/
let totalSlides = document.querySelectorAll('.slider-item').length;
console.log(totalSlides);
/*--------- Definindo o slide 'inicial' --------------*/
let currentSlide = 0;

/*--------- Selecionando a div da largura do slide --------------*/
document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;

/*--------- Pega a altura do slide para aplicar aos controles e assim deixá-los centralizados --------------*/
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`; 

/*--------- Função para voltar o slide --------------*/
function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}


/*--------- Função para passar o slide --------------*/
function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)){
        currentSlide = 0;
    }
    updateMargin();
}

function updateMargin(){
    let slideWidthItem = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * slideWidthItem);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);