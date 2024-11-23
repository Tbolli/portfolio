// Year clac (short for calculator)
const yearSpan = document.getElementById("year-date");
yearSpan.innerText = new Date().getFullYear();


const navbar = document.querySelector('.navbar');
const body = document.getElementsByTagName('body')[0]

window.addEventListener('scroll', () => {
    // Calculate degrees based on scroll position
    const scrollY = window.scrollY;
    // Optional: Change navbar class based on scroll position
    if (scrollY > 185.5) { 
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });

