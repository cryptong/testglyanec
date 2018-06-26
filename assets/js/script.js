$('#news .news-blk a').hover(function() {
    $(this).siblings('#news .news-blk p').addClass('phovered');
  }, function() {
    $(this).siblings('#news .news-blk p').removeClass('phovered');
  }
);