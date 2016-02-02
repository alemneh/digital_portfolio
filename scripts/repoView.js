(function(module) {
  var repoView = {};

  var ui = function() {
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '">' + repo.name.toUpperCase() + ' </a><small> Created On: '+repo.created_at.slice(0, 10)+'</small>');

  };

  repoView.index = function() {
    ui();
    //console.log('Hello');
    $('#about ul').append(
      repos.with('has_downloads').map(render));
  };

  repoView.index();
  module.repoView = repoView;
})(window);
