var examples = [];

function Example (opts) {
  this.title = opts.title;
  this.imageUrl = opts.imageUrl;
  this.link = opts.link;
  this.description = opts.description;
}

Example.prototype.toHtml = function() {

  var appTemplate = $('#portfolioData').html();

  var compileTemplate = Handlebars.compile(appTemplate);

  var dataSource = {
    title: this.title,
    imageUrl: this.imageUrl,
    link: this.link,
    description: this.description
  };

  var html = compileTemplate(dataSource);
  $('#portfolio').append(html);
};

rawData.forEach(function(ele) {
  examples.push(new Example(ele));
});

examples.forEach(function(a) {
  $('#portfolio').append(a.toHtml());
});
