const accordionClass = document.querySelectorAll ('.js-faqs dt');
accordionClass[0].classList.add ('activo');
accordionClass[0].nextElementSibling.classList.add ('activo');

function addFaqsList (event){
event.currentTarget.classList.toggle ('activo');
this.nextElementSibling.classList.toggle ('activo');

}
accordionClass.forEach ((item)=>{
  item.addEventListener ('click', addFaqsList);
});