$(document).ready(function () {
  $('.countdown').countdown('2020/04/26 23:59:59', function (event) {
    $('.day').html(event.strftime('%D'));
    $('.hour').html(event.strftime('%H'));
    $('.minute').html(event.strftime('%M'));
    $('.second').html(event.strftime('%S'));
  });
});