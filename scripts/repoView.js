(function(module) {
  var repoView = {};

  // DONE: Private methods declared here live only within the scope of the wrapping IIFE.
  var ui = function() {
    var $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: How do you want to render a single repo as html? Return your filled in HTML template.
  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '">' + repo.name.toUpperCase() + ' </a><small> Created On: '+repo.created_at.slice(0, 10)+'</small>');

  };

  // DONE: If all the data is loaded, we can prep the UI and render the repos.
  repoView.index = function() {
    ui();
    console.log('Hello');
    // The jQuery `append` method lets us append an entire array of HTML elements at once,
    // So we can use a little FP to transform our data-set into DOM nodes:
    $('#about ul').append(
      repos.with('has_downloads').map(render));
  };

repoView.index();
  module.repoView = repoView;
})(window);
