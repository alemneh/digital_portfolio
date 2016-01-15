(function(module) {
  var articleView = {};

  articleView.handleMainNav = function() {
    $('.selected').hide();
    $('.main-nav li a').on('click', function(e) {
      e.preventDefault;
      var target = $(this).attr('href');
      if(target === '#about') {
        $(target).removeClass('selected');
        $('#portfolio').addClass('selected');
        $('.selected').hide();
        $(target).fadeIn();
      } else {
        $(target).removeClass('selected');
        $('#about').addClass('selected');
        $('.selected').hide();
        $(target).fadeIn();
      }
    });
  };

  articleView.initIndexPage = function() {
    Example.numWordsAll();
    Example.allTitles();
    articleView.handleMainNav();

    Example.all.forEach(function(a){
      $('#portfolio').append(a.toHtml());
    });

    $('.projects').text(Example.all.length);
    $('.words').text(Example.numWordsAll());
  };
  module.articleView = articleView;
}(window));
