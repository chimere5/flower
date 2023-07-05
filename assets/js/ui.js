var sideBar = {
  open: function () {
    $("#sideBar, .mask").addClass("show");
  },
  close: function () {
    $("#sideBar, .mask").removeClass("show");
  },
};

var month = {
  show: function (i) {
    var i = i - 1;
    $(".floor_preview_slide").slick("slickGoTo", i);
    $(".floor_slide .item").removeClass("active");
    $(".floor_slide .slick-slide").eq(i).find(".item").addClass("active");
  },
};

function bouquet_tab(n) {
  $(".bouquet_tab li button").removeClass("active");
  $(".bouquet_tab li")
    .eq(n - 1)
    .find("button")
    .addClass("active");
  $(".bouquet_list div[class^=item].show").animate(
    { opacity: 0 },
    300,
    function () {
      $(".bouquet_list div[class^=item]").removeClass("show");
      $(".bouquet_list div.item" + n)
        .addClass("show")
        .animate({ opacity: 1 }, 300);
    }
  );
}

$(document).ready(function () {
  $(".main_visual").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "ease-out",
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow:
      "<img class='slick-prev' src='./assets/images/main_visual_prev.png' alt=''>",
    nextArrow:
      "<img class='slick-next' src='./assets/images/main_visual_next.png' alt=''>",
  });

  $(".floor_preview_slide").slick({
    dots: false,
    arrows: false,
    infinite: false,
    touchMove: false,
    draggable: false,
    speed: 500,
    fade: true,
    autoplay: false,
    adaptiveHeight: false,
  });
  $(".floor_slide ul").slick({
    slidesToShow: 12,
    slidesToScroll: 12,
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    prevArrow:
      "<img class='slick-prev' src='./assets/images/slide_prev.png' alt=''>",
    nextArrow:
      "<img class='slick-next' src='./assets/images/slide_next.png' alt=''>",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });

  $(".space_slide").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow:
      "<img class='slick-prev' src='./assets/images/space_prev.png' alt=''>",
    nextArrow:
      "<img class='slick-next' src='./assets/images/space_next.png' alt=''>",
  });

  $(".instagram_slide ul").slick({
    prevArrow:
      "<img class='slick-prev' src='./assets/images/slide_prev.png' alt=''>",
    nextArrow:
      "<img class='slick-next' src='./assets/images/slide_next.png' alt=''>",
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(".class_list_slide").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        dots: true,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".class_review_slide").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  AOS.init({
    offset: 50,
  });
});

$(window).scroll(function () {
  var top = $(this).scrollTop();
  if (top > 10) {
    $("#header").addClass("fixed");
  } else {
    $("#header").removeClass("fixed");
  }
});
