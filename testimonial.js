
    let currSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial-item');
    const buttons1 = document.querySelectorAll('.test-slider-button button');
    let autoSlideInterval; 

    function TestshowSlide(index) {
        if (index >= testimonials.length) {
            currSlide = 0;
        } else if (index < 0) {
            currSlide = testimonials.length - 1;
        } else {
            currSlide = index;
        }

        for (let i = 0; i < testimonials.length; i++) {
            testimonials[i].classList.remove('active');
           
        }

        testimonials[currSlide].classList.add('active');
  
    }

    function testnextSlide() {
        TestshowSlide(currSlide + 1);
        resetAutoSlide();
    }

    function testprevSlide() {
        TestshowSlide(currSlide - 1);
        resetAutoSlide();
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 5000);
    }

    function autoSlide() {
        testnextSlide();
    }

    autoSlideInterval = setInterval(autoSlide, 5000);



