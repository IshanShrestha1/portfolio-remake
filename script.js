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

// project section 
const projects = [
  {
    Image: "images/HTML.jpg",
    title: "Animated Navbar",
    description: "A responsive navigation bar with smooth animation and toggle function",
  },
  {
    Image: "images/HTML.jpg",
    title: "Animated Navbar",
    description: "A responsive navigation bar with smooth animation and toggle function",
  },
  {
  Image: "images/HTML.jpg",
    title: "Animated Navbar",
    description: "A responsive navigation bar with smooth animation and toggle function",
  },
];
const container = document.getElementById("project-container");

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${project.Image}" alt="${project.title}"/>
    <h2>${project.title}</h2>
    <p>${project.description}</p>
    `;
    container.appendChild(card);
  });