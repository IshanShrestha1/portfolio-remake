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

  // service section 
  const services = [
    {
      Image: "images/JS.jpg",
      Title: "Web Design",
      Description: "I create modern and responsive website designs tailored to your needs.",
    },
  ];
  const sev = document.getElementById("service-container");
  services.forEach(service => {

    const ser = document.createElement("div");
    ser.className = "service-box";
    ser.innerHTML = `
    <img src="${service.Image}" alt="${service.Title}"/>
    <h3>${service.Title}</h3>
    <p>${service.Description}</p>
    `;
    sev.appendChild(ser);
  });
