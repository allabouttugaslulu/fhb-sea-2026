window.addEventListener('scroll', () => {

  let nav = document.querySelector("nav");

  if(window.scrollY > 10){
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  document.querySelectorAll('.reveal').forEach(el => {
    let top = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if(top < windowHeight - 80){
      el.classList.add('active');
    }
  });

});
