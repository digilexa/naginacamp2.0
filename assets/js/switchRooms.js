$(document).ready(function() {
  const hamburger = $('.header-hamburger-icon');
  const standardRoomSelector = $('#standard-room');
  const executiveRoomSelector = $('#executive-room');
  const kingRoomSelector = $('#king-room');

  standardRoomSelector.on('click', () => {
    standardRoomSelector.addClass('active-header');
    executiveRoomSelector.removeClass('active-header');
    kingRoomSelector.removeClass('active-header');
  });

  executiveRoomSelector.on('click', () => {
    executiveRoomSelector.addClass('active-header');
    standardRoomSelector.removeClass('active-header');
    kingRoomSelector.removeClass('active-header');
  });

  kingRoomSelector.on('click', () => {
    kingRoomSelector.addClass('active-header');
    standardRoomSelector.removeClass('active-header');
    executiveRoomSelector.removeClass('active-header');
  });
});
