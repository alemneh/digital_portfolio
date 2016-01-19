(function(module) {
  var examplesController = {};

  examplesController.index = function() {
    Example.fetchAll(exampleView.initIndexPage);
    $('#about').hide();
    $('#portfolio').show();
  };

  module.examplesController = examplesController;
})(window);
