// Testimonial Button Icon Changes //
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const btnImgLeft = document.getElementById("btn-img-left");
const btnImgRight = document.getElementById("btn-img-right");

// Stracture
const setChangeImage = (event, image) => {
  btnLeft.addEventListener(event, () => {
    btnImgLeft.setAttribute("src", image);
  });
};

const setChangeImageRight = (event, image) => {
  btnRight.addEventListener(event, () => {
    btnImgRight.setAttribute("src", image);
  });
};

// Left Button
setChangeImage("mouseenter", "./images/left-green-arrow.png");

setChangeImage("mouseleave", "./images/left-arrow.png");

// Right Button
setChangeImageRight("mouseenter", "./images/white-right-arrow.png");

setChangeImageRight("mouseleave", "./images/right-arrow.png");

console.log(btnLeft);

// Testemonial Slider Functionalit

$(document).ready(function () {
  $(".testimonial-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".btn-left",
    autoplay: true,
    autoplaySpeed: 3000,

    nextArrow: ".btn-right",
  });
});

// Rooms Slider Functionalit
$(document).ready(function () {
  $(".room-images").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".btn-left",
    autoplay: false,
    // centerMode: true,
    // centerPadding: "60px",
    autoplaySpeed: 3000,

    nextArrow: ".btn-right",
  });
});
