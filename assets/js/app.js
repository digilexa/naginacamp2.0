$(document).ready(function() {
  const cookieBox = $(".wrapper");
  const buttons = $(".button");
  const slidebooking = $('.slider-shape');
  const bookingtable = $('.trip-booking');
  const closebooking = $('.close-slide');

  const executeCodes = () => {
    if (document.cookie.includes("nagina_desert_camp")) return;
    cookieBox.addClass("show");
    buttons.each(function() {
      $(this).on("click", () => {
        cookieBox.removeClass("show");
        if ($(this).attr("id") == "acceptBtn") {
          document.cookie = "cookieBy=nagina_desert_camp; max-age=" + 60 * 60 * 24 * 30;
        }
      });
    });
  };

  $(window).on("load", executeCodes);

  // OFFER POP UP

  const myTimeout = setTimeout(myGreeting, 5000);

  function myGreeting() {
    $(".offer-modal").css("display", "block");
  }

  $(".close-offer").on('click', () => {
    $(".offer-modal").css("display", "none");
  });

  // SLIDER BOOKING NOW

  slidebooking.on('click', () => {
    bookingtable.addClass('active-slider');
  });

  closebooking.on('click', () => {
    bookingtable.removeClass('active-slider');
  });
});
