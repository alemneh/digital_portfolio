var articleView = {};

articleView.initIndexPage = function() {
  Example.all.forEach(function(a){
    $('#portfolio').append(a.toHtml());
  });
};
