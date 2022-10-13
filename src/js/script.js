var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false
});
document.querySelector('.prev').onclick = function () {
  slider.goTo('prev');
};
document.querySelector('.next').onclick = function () {
    slider.goTo('next');
  };