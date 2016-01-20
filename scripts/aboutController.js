(function(module) {
  var aboutController = {};


  aboutController.index = function() {
    $('#portfolio').hide();
    $('#about').show();

    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
