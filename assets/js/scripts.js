var generalScripts = {
  open: function() {
    $('.open').on('click', function(event) {
      event.preventDefault();
      var $target = $(this).attr('data-target');
      if($($target).css('visibility') == 'hidden') {
        $($target).css('visibility','visible')
        $($target).css('opacity','1')
      }else if($($target).css('visibility') == 'visible') {
        $($target).css('visibility','hidden')
        $($target).css('opacity','0')
      }
    })
  }
}
generalScripts.open();
