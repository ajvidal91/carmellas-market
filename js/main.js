const mainPhotoArray = ['images/store-front.jpg', 'images/store-front.jpg', 'images/shake-chocolate.jpeg']
const frontPageCarousel = $('.carousel-first-page')


frontPageCarousel.slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
