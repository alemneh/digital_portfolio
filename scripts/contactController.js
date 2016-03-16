(function(module) {
  var contactController = {};


  contactController.index = function() {
    $('#portfolio').hide();
    $('#about').hide();
    $('#contact').show();

    repos.requestRepos(repoView.index);
  };

  module.contactController = contactController;
})(window);
