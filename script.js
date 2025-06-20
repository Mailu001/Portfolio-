// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// No JS form handler needed; PHP handles the contact form submission.

// Section fade-in on scroll
function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll);

// Carousel functionality for references
const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

let carouselInterval;

function startCarouselAutoSlide() {
    carouselInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
    }, 4000);
}

function stopCarouselAutoSlide() {
    clearInterval(carouselInterval);
}

if (prevBtn && nextBtn && carouselItems.length > 0) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(currentIndex);
    });
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(currentIndex);
    });
    // Start auto-slide
    startCarouselAutoSlide();
    // Pause on hover
    const carousel = document.querySelector('.references .carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopCarouselAutoSlide);
        carousel.addEventListener('mouseleave', startCarouselAutoSlide);
    }
}
