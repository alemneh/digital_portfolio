(function(module) {
  var exampleView = {};

  exampleView.handleMainNav = function() {
    $('.icon-menu').on('click', function(e) {
      $('#mobileNav ul').toggle();
    });
  };
  exampleView.handleMainNav();
  exampleView.initIndexPage = function() {
    Example.numWordsAll();
    Example.allTitles();


    Example.all.forEach(function(a){
      $('#portfolio').append(a.toHtml());
    });

    $('.projects').text(Example.all.length);
    $('.words').text(Example.numWordsAll());
  };
  module.exampleView = exampleView;
}(window));
