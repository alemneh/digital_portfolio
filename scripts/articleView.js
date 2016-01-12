var articleView = {};

articleView.initIndexPage = function() {
  Article.all.forEach(function(a){
    $('#portfolio').append(a.toHtml());
  });
};
