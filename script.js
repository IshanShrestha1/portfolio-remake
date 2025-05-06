// hamburger 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
//text showing
const text="Ishan Shrestha";
const typedtext = document.getElementById('typed-text');
let index=0;
function type(){
  if(index < text.length){
    typedtext.textContent += text.charAt(index);
    index++;
    setTimeout(type,150);
  }
}
type();