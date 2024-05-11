const hum_btn = document.querySelector('.hum-btn');
const hum_menu = document.querySelector('.hum-menu');
const header = document.querySelector('.header');

window.addEventListener('scroll', function(){
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.classList.add('s-active');
    hum_btn.classList.add('s-active');
  } else {
    header.classList.remove('s-active');
    hum_btn.classList.remove('s-active');
  }
});

hum_btn.addEventListener('click', () => {
    hum_btn.classList.toggle('clicked');
    hum_menu.classList.toggle('active');
});