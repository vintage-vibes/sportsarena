const menutoggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.navbar ul')

menutoggle.addEventListener("click" ,()=>{
    navLinks.classList.toggle('active');
    menutoggle.classList.toggle("open");
})