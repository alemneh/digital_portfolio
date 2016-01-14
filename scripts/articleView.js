(function(module) {
  var articleView = {};

  articleView.initIndexPage = function() {
    Example.numWordsAll();
    Example.allTitles();

    Example.all.forEach(function(a){
      $('#portfolio').append(a.toHtml());
    });

    $('.projects').text(Example.all.length);
    $('.words').text(Example.numWordsAll());
  };
  module.articleView = articleView;
}(window));
