(function(module) {
  var aboutController = {};


  aboutController.index = function() {
    $('#portfolio').hide();
    $('#about').show();
    $('#contact').hide();

    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
