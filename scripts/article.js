function Example (opts) {
  this.title = opts.title;
  this.imageUrl = opts.imageUrl;
  this.link = opts.link;
  this.description = opts.description;
}

Example.all = [];

Example.prototype.toHtml = function() {
  var template = Handlebars.compile($('#portfolioData').text());

  return template(this);
};

Example.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Example.all.push(new Example(ele));
  });
};

Example.fetchAll = function() {
  if(localStorage.rawData) {
    Example.loadAll(JSON.parse(localStorage.rawData));
    articleView.initIndexPage();

  } else {
    $.getJSON('/data/portfolioExampoles.json', function(rawData) {
      Example.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      articleView.initIndexPage();
    });

  }
};




var dataSource = {
  title: this.title,
  imageUrl: this.imageUrl,
  link: this.link,
  description: this.description
};
