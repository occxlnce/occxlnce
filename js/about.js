section = document.querySelector('section');

window.addEventListener('scroll', function(){
  scroll_val = window.scrollY;
  section.style.clipPath = `circle(${scroll_val}px at center)`;
})
