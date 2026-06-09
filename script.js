document.addEventListener("DOMContentLoaded", () => {
    const carouselElement = document.getElementById("mainHeroCarousel");

    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: false,
        wrap: true
    });

    setInterval(() => {
        carousel.next();
    }, 5000); 
});