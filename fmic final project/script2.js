$(document).ready(function() {
    $('.gallery-list-item').click(function() {
      let value = $(this).attr('data-filter');
      if(value === 'all') {
        $('.filter').show(300);
      } else {
        $('.filter').not('.' + value).hide(300);
        $('.filter').filter('.' + value).show(300);
      }
  });

  $('.gallery-list-item').click(function() {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 4300) {
      $('.card-1').addClass('MoveFromLeft');
      $('.card-2').addClass('MoveFromBottom');
      $('.card-3').addClass('MoveFromRight');
    } else {
      $('.card-1').removeClass('MoveFromLeft');
      $('.card-2').removeClass('MoveFromBottom');
      $('.card-3').removeClass('MoveFromRight');
    }
  });
});  
