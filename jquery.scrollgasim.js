;(function($) {
  $.fn.scrollgasim = function(opts) {
    var defaults = {
      offset : 0,
      duration : 300,
      after : function() {}
    }
    this.each(function() {
      var config = $.extend(defaults, opts || {});
      var distance = (($("body").scrollTop()-$(this).offset().top)+config.offset)*-1;
      $("body, html").animate({
        scrollTop : '+=' + distance
      }, config.duration, config.after);
      return self;
    });        
    return this;
  };
})(jQuery);