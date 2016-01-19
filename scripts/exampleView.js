(function(module) {
  var exampleView = {};

  // exampleView.handleMainNav = function() {
  //   $('.selected').hide();
  //   $('.main-nav li a').on('click', function(e) {
  //     e.preventDefault;
  //     var target = $(this).attr('href');
  //     if(target === '#about') {
  //       $(target).removeClass('selected');
  //       $('#portfolio').addClass('selected');
  //       $('.selected').hide();
  //       $(target).fadeIn();
  //     } else {
  //       $(target).removeClass('selected');
  //       $('#about').addClass('selected');
  //       $('.selected').hide();
  //       $(target).fadeIn();
  //     }
  //   });
  // };

  exampleView.initIndexPage = function() {
    Example.numWordsAll();
    Example.allTitles();
    //exampleView.handleMainNav();

    Example.all.forEach(function(a){
      $('#portfolio').append(a.toHtml());
    });

    $('.projects').text(Example.all.length);
    $('.words').text(Example.numWordsAll());
  };
  module.exampleView = exampleView;
}(window));
