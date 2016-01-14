(function(module) {
  var articleView = {};

  articleView.initIndexPage = function() {
    Example.numWordsAll();
    Example.allTitles();

    Example.all.forEach(function(a){
      $('#portfolio').append(a.toHtml());
    });
  };
  module.articleView = articleView;
}(window));
