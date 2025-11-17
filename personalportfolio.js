// Certificate Slider JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Function to update slider position
    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    // Next slide function
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    // Previous slide function
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlider();
        });
    });

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
});



const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";

    var i = 0;
    var timer = setInterval(function () {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}


// application
var speed = 75;
var h1 = document.querySelector('h1');
var p = document.querySelector('p');
var delay = h1.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h1, speed);


// type affect to body
setTimeout(function () {
    p.style.display = "inline-block";
    typeEffect(p, speed);
}, delay);
const cards = document.querySelectorAll('.card');
let current = 2; // center card

function updateCards() {
    cards.forEach((card, i) => {
        card.classList.remove('active');
        card.style.transform = `scale(0.8) translateX(${(i - current) * 250}px)`;
        card.style.opacity = 0.6;
        card.style.zIndex = 1;
    });
    const active = cards[current];
    active.classList.add('active');
    active.style.transform = 'scale(1.2)';
    active.style.opacity = 1;
    active.style.zIndex = 3;
}

document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % cards.length;
    updateCards();
});

document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + cards.length) % cards.length;
    updateCards();
});

updateCards();

/* CONTACT ME ANIMATION */
$(function () {
    $("#button").click(function () {
        $("#button").addClass("onclic", 250, validate);
    });

    function validate() {
        setTimeout(function () {
            $("#button").removeClass("onclic");
            $("#button").addClass("validate", 450, callback);
        }, 2250);
    }
    function callback() {
        setTimeout(function () {
            $("#button").removeClass("validate");
        }, 1250);
    }
});
/* Button 4: 3D Press Effect */