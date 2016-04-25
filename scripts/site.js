$(function() {
  $('body').fadeTo(1000,1);


  $('a').on('mouseover',function(e){
    $target = $(e.target);
    $target.animate({
      'font-size': '+=2'
    },250);
  });

  $('a').on('mouseout',function(e){
    $target = $(e.target);
    $target.animate({
      'font-size': '-=2'
    },250);
  });

});

