var generalScripts = {
  open: function() {
    $('.open').on('click', function() {
      var $target = $(this).attr('data-target');
      if($($target).css('visibility') == 'hidden') {
        $($target).css('visibility','visible')
        $($target).css('opacity','1')
      }else if($($target).css('visibility') == 'visible') {
        $($target).css('visibility','hidden')
        $($target).css('opacity','0')
      }
      //alert($($target).css('visibility'));
    })
  }
}
generalScripts.open();
