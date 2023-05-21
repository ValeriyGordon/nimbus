

// burger
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#header__burger').addEventListener('click', function(){
      document.querySelector('#header__list--adaptive').classList.toggle('is-active')
    })
})
  
// accordeon footer

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// slider

$(document).ready(function(){
  $('.slider').slick({
    dots: true, // убираем точки навигации
    arrows: false, // убираем стрелки навигации
    infinite: true, // карусель зациклена
    speed: 300, // скорость анимации
    slidesToShow: 1, // количество показывающихся слайдов за раз
    slidesToScroll: 1 // количество прокручиваемых слайдов за раз
  });
});