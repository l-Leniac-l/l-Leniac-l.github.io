var generalScripts = {
  open: function() {
    $('.open').on('click', function() {
      var $target = $(this).attr('data-target');
      /*var target = document.getElementById($target);
      if(target.style.visibility = 'hidden') {
        target.style.visibility = 'visible';
      } else if(target.style.visibility = 'visible') {
        target.style.visibility = 'hidden';
      }*/
      $($target).css('visibility','visible');
    })
  }
}
generalScripts.open();
