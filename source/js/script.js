function openCity(evt, cityName) {           //Меню - вертикальные табы (в выпадающем меню)
	// Объявил переменные
	let i, tabcontent, tablinks;
  
	// Получаю все элементы с классом tabcontent и скрываю их
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";    //length - это число, индекс которого всегда является на 1 больше индекса самого последнего индекса в массиве
	}
  
	// Получаю все элементы с классом  tablinks и снимаю класс active
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
  
	// Показал на текущей вкладке, и добавляю класс "active" 
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
}


// Slider================
// Индекс слайда по умолчанию 
let cardIndex = 1;
showCard(cardIndex);

// текущий слайд
function Slide(n) {
    showCard(cardIndex = n);
}

//Основная функция
function showCard(n) {
    let j;
    let cards = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item"); //Точки
    if (n > cards.length) {
        cardIndex = 1
    }
    if (n < 1) {
        cardIndex = cards.length
    }
    for (j = 0; j < cards.length; j++) {
        cards[j].style.display = "none";
    }
    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" focus", "");
    }
    cards[cardIndex - 1].style.display = "block";
    dots[cardIndex - 1].className += " focus";
}



// тот же код, что и на табы в меню отвечает за табы в секции Tabs

document.getElementById("defaultOpen").click(); //Установил открытый таб СПЕЦПРЕДЛОЖЕНИЯ по умолчанию




// Слайдер карточек ВСЕ ВКЛЮЧЕН


//Индекс по умолчанию
var slideIndex = 1;
showSlides(slideIndex);
// Увеличевает индекс на 1 и показывает следующий слайд
function plusSlide() {
    showSlides(slideIndex += 1);
}
// предыдущий
function minusSlide() {
    showSlides(slideIndex -= 1);  
}
// Текущий слайд
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// Основная функция 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("ben__content");
    if (n > slides.length) {
    slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}



//Mobile-burger-menu=======

document.querySelector('.mobile div').addEventListener('click', () => {
    document.querySelector('.mobile div').classList.toggle('active');
    document.querySelector('.mobile nav').classList.toggle('open');
    document.querySelector('.mobile__list-wrap').classList.toggle('show');
});

// ==========================

document.querySelector('.mobile__burger-exit').addEventListener('click', () => {            //То же самое для закрывающей кнопи
    document.querySelector('.mobile__burger-exit').classList.toggle('active');
    document.querySelector('.mobile nav').classList.toggle('open');
    document.querySelector('.mobile__list-wrap').classList.toggle('show');
});

// =======================

let item = document.querySelectorAll(".mobile__item");          //Функция добавляет класс с фоном для вкладки
for (let i = 0; i < item.length; i++) {
  item[i].onclick = function(){
    this.classList.toggle('bg');
  };
}


//Вкладки в меню бургер
$(document).ready(function(){
    $('.mobile__item').click(function(event){
        $(this).toggleClass('run').next().slideToggle(300);
    });
});

