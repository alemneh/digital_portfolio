(function(module) {
  function Example (opts) {
    this.title = opts.title;
    this.imageUrl = opts.imageUrl;
    this.link = opts.link;
    this.description = opts.description;
  }

  Example.all = [];

  Example.prototype.toHtml = function() {

    var template = Handlebars.compile($('#portfolioData').text());

    // this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    // this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
    // this.description = marked(this.description);

    return template(this);

  };

  Example.loadAll = function(rawData) {
    Example.all = rawData.map(function(ele) {
      return new Example(ele);
    });

  };

  Example.getAll = function () {
    $.getJSON('/data/portfolioExamples.json', function(rawData) {
      console.log('else worked');
      Example.loadAll(rawData);
      localStorage.rawData = JSON.stringify(rawData);
      articleView.initIndexPage();

    });
  };

  Example.fetchAll = function() {
    if(localStorage.rawData) {
      var xhr = $.ajax({
        type: 'HEAD',
        url: '/data/portfolioExamples.json',
        success: function(data, message, xhr) {
          var serverEtag = xhr.getResponseHeader('eTag');
          if(!localStorage.eTag || localStorage.eTag !== serverEtag ) {
            localStorage.eTag = serverEtag;
            Example.getAll();
          } else {
            Example.loadAll(JSON.parse(localStorage.rawData));
            articleView.initIndexPage();
          }
        }
      });

    } else {
      Example.getAll();

    }
  };
  Example.numWordsAll = function() {
    return Example.all.map(function(example) {
      var words = example.description.split(' ');
      console.log(words.length);
      return words.length;
    })
    .reduce(function(prev, cur) {
      console.log(prev + cur);
      return prev + cur;
    });

  };

  Example.allTitles = function() {
    return Example.all.map(function(example) {
      var titles = example.title;
      console.log(titles);
      return titles;
    })
    .reduce(function(prev, cur) {
      //console.log(typeof(prev));
      if(prev.indexOf(cur) === -1) {
        prev.push(cur);
      }
      return prev;
    }, []);
  };

  Example.numWordsByTitle = function() {
    return Example.allTitles().map(function(title) {
      return {
        name: title,
        numWords: Example.all.filter(function(a) {
          return a.title === title;
        })
        .map(function(a) {
          var words = a.description.split(' ');
          return words.length;
        }).reduce(function(a,b) {
          return (a+b);
        })
      };
    });

  };
  module.Example = Example;
}(window));
