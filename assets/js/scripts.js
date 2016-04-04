var generalScripts = {
  open: function() {
    $('.open').on('click', function(event) {
      event.preventDefault();
      var $target = $(this).attr('data-target');
      if($($target).css('visibility') == 'hidden') {
        $($target).css('visibility','visible')
        $($target).css('opacity','1')
        setTimeout(function() {
          $($target).children('#search_box').focus()
        }, 100);
      }else if($($target).css('visibility') == 'visible') {
        $($target).css('visibility','hidden')
        $($target).css('opacity','0')
      }
    })
  },
  modal: function(){
    $('.portfolio-list .item .link').on('click',function(event){
      event.preventDefault();
      var $target = $(this).parents().children('.modal');
      if($($target).css('visibility') == 'hidden') {
        $($target).css('visibility','visible')
        $($target).css('opacity','1')
      }
      $(this).parents().children('.modal').children('.close').on('click',function(){
        if($($target).css('visibility') == 'visible') {
          $($target).css('visibility','hidden')
          $($target).css('opacity','0')
        }
      })
    });
  }
}
generalScripts.open();
generalScripts.modal();
