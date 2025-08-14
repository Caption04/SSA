// Open side menu 
const openMenu = document.querySelector(".menu-btn");
const closeMenu = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");
const html = document.documentElement;
const overlay = document.querySelector(".overlay-sidebar");

openMenu.addEventListener("click", () => {
    console.log("printed");
    html.classList.add("no-scroll");
    overlay.classList.add("visible");
    sideBar.classList.add("visible");
})

closeMenu.addEventListener("click", ()=> {
    html.classList.remove("no-scroll");
    overlay.classList.remove("visible");
    sideBar.classList.remove("visible");
})

// Scrolling Brands 
const brands = document.querySelectorAll(".brand-container");
const dots = document.querySelectorAll(".circle");


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Find the index of the visible slide
      const index = Array.from(brands).indexOf(entry.target);
      
      // Reset all dots
      dots.forEach(dot => dot.classList.remove('active'));

      // Activate the matching dot
      dots[index].classList.add('active');
    }
  });
}, {
  threshold: 0.6 // means 60% of the slide must be in view
});

// Observe each slide
brands.forEach(slide => observer.observe(slide));
