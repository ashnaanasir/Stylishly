let navbar = document.getElementById('nav-bar');
let navheight = navbar.offsetTop;

window.addEventListener('scroll', function(){
    if(this.window.scrollY > navheight){
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
});

