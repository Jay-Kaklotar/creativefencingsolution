console.log('WebSite Creat by Jay K.')

let nav_icon = document.getElementById('nav_icon');
let header_nav = document.querySelector('.header_nav');
let body = document.body;

nav_icon.addEventListener('click', (event) => {
    event.stopPropagation();
    if (header_nav.style.transform === 'translate(0rem, 0px)') {
        // Navigation is open, close it
        header_nav.style.transform = 'translate(90rem, 0px)';
        body.style.overflow = 'auto'; // Enable scroll
        bars.classList.remove('fa-xmark');
        bars.classList.add('fa-bars');
    } else {
        // Navigation is closed, open it
        header_nav.style.transform = 'translate(0rem, 0px)';
        body.style.overflow = 'hidden'; // Disable scroll
        bars.classList.remove('fa-bars');
        bars.classList.add('fa-xmark');
    }
});

// nav_icon.addEventListener('click', (event) => {
//     event.stopPropagation();
//     if (header_nav.style.transform === 'translate(0rem, 0px)') {
//         header_nav.style.transform = 'translate(90rem, 0px)';
//         xmarkk.style.display = 'none';
//         barss.style.display = 'block';
//     } else {
//         header_nav.style.transform = 'translate(0rem, 0px)';
//         barss.style.display = 'none';
//         xmarkk.style.display = 'block';
//     }
// });

// Add event listener to the window to close the navigation when clicking outside of it
window.addEventListener('click', (event) => {
    if (header_nav.style.transform === 'translate(0rem, 0px)' && !event.target.closest('.header_nav')) {
        // Navigation is open, close it when clicking outside of it
        header_nav.style.transform = 'translate(90rem, 0px)';
        body.style.overflow = 'auto'; // Enable scroll
        bars.classList.remove('fa-xmark');
        bars.classList.add('fa-bars');
    }
});

// count Number
var counted = 0;
$(window).scroll(function () {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
        counted = 1;
    }
});

// slider Testimonials
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 1,
        dots: true,
        arrows: true, // Show arrows
        prevArrow: '<button type="button" class="slick-prev">❮</button>', // Left arrow (<>)
        nextArrow: '<button type="button" class="slick-next">❯</button>', // Right arrow (<>)
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1435,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Show 2 slides at a time on screens less than 1024px
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on screens less than 768px
                    arrows: false,
                }
            }
            // Add more breakpoints/settings as needed
        ]
    });
});

// Loader
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('load').style.visibility = "hidden";
        }, 1000);
    }
}

// $(window).on("load", function () {
//     setTimeout(function () {
//         $("#load").fadeOut("slow");
//     }, 800);
// });

// Gallery
// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('myImages');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function (evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}