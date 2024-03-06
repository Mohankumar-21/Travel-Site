let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.image-items');
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[currentSlide].style.display = 'flex';
    updateButtonSlider();
}


function nextSlide() {
    showSlide(currentSlide + 1);
    updateSlider();
}

function prevSlide() {
    showSlide(currentSlide - 1);
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector(".img-container");
    slider.style.transition = "transform 1s ease";
    const translateValue = -currentSlide * 100 + "%";
    document.querySelector(".img-container").style.transform = "translateX(" + translateValue + ")";
    slider.style.transform = "translateX(" + translateValue + ")";

    setTimeout(() => {
        slider.style.transition = "none";
    }, 1000);
}

function updateButtonSlider() {
    const buttons = document.querySelectorAll('.button-slider button');
    buttons.forEach((button, index) => {
        if (index === currentSlide) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}


let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
        nextSlide();
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

showSlide(currentSlide);
updateSlider();
startAutoSlide();

const sliderContainer = document.querySelector('.img-container');
sliderContainer.addEventListener('mouseover', stopAutoSlide);
sliderContainer.addEventListener('mouseout', startAutoSlide);