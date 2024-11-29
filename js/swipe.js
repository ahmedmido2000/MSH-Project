const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000, // Delay between slides in milliseconds (3 seconds)
        disableOnInteraction: false, // Allow autoplay to continue after user interactions
    },
         // Responsive breakpoints
    breakpoints: {
    640: {
    slidesPerView: 1, // 1 card on small screens
    },
    991: {
    slidesPerView: 2, // 3 cards on large screens
    },
    },
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
    });