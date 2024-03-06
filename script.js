function toggleNavbar() {
    var navbarList = document.querySelector('.navbar-list');
    var enterPage = document.querySelector('.Enter-page');
    navbarList.classList.toggle('show');
    enterPage.classList.toggle('show');
    
}


// slide 

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.image-items');
    const buttons = document.querySelectorAll('.button-slider button');
    
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        buttons[i].classList.remove('active'); 
    }

    slides[currentSlide].style.display = 'flex';
    buttons[currentSlide].classList.add('active');
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
    const translateValue = -currentSlide * 100 + "%";
    document.querySelector(".img-container .image-items").style.transform = "translateX(" + translateValue + ")";
}


updateSlider();

showSlide(currentSlide);


let auSlideInterval;

function startAutoSlide() {
    auSlideInterval = setInterval(function () {
        nextSlide();
        updateSlider();
    }, 5000);
}

function stopAutoSlide() {
    clearInterval(auSlideInterval);
}


startAutoSlide();


const sliderContainer = document.querySelector('.img-container');
sliderContainer.addEventListener('mouseover', stopAutoSlide);
sliderContainer.addEventListener('mouseout', startAutoSlide);
