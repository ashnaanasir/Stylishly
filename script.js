//navbar appear on scroll functionality
let navbar = document.getElementById('nav-bar');
let navheight = navbar.offsetTop;

window.addEventListener('scroll', function(){
    if(this.window.scrollY > navheight){
        navbar.classList.add('fixed-navbar');
    } else {
        navbar.classList.remove('fixed-navbar');
    }
});


//product slider  - uses jquery

 $(document).ready(function () {
     $('.just-in-container').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        swipeToSlide: true,
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 4,
                }
            }, 
        
            {
                breakpoint: 1160,
                settings: "unslick"
            }
    ]
     });
 });