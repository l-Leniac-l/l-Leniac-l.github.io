var searchEngine = {
  post_list: $(".post-list"),

  index: lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('author');
    this.field('description', { boost: 5 });
    this.field('tags');
    this.field('url');
  }),

  index_tag: lunr(function () {
    this.field('id');
    this.field('title');
    this.field('author');
    this.field('description');
    this.field('tags', { boost: 10 });
    this.field('url');
  }),

  data: $.getJSON('/search_data.json'),

  populate: function() {
    searchEngine.data.then(function(loaded_data){
      $.each(loaded_data, function(index, value){
        searchEngine.index.add(
          $.extend({ "id": index }, value)
        );
        searchEngine.index_tag.add(
          $.extend({ "id": index }, value)
        );
      });
    });
  },

  getQueryString: function(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
  },

  perform: function(query,tag=false){
    searchEngine.populate();
    var results = null;
    var msg_success = null;
    var msg_error = null;

    if(tag === true) {
      results = searchEngine.index_tag.search(query);
    } else {
      results = searchEngine.index.search(query);
    }

    searchEngine.data.then(function(loaded_data){
      if(results.length) {
        searchEngine.post_list.empty();
        results.forEach(function(result) {
          var item = loaded_data[result.ref];
          var appendString = '<h1 class="search_msg">Showing results for "'+query+'"</h1>'+
          '<article class="post -search">'+
          '<h1 class="title">' + item.title + '</h1>'+
          '<p class="description">' + item.description + '</p>'+
          '<a href="'+ item.url + '" class="link">Continue Reading</a>'+
          '</article>';
          searchEngine.post_list.append(appendString);
        });
      } else {
        searchEngine.post_list.html('<h1 class="search_msg">No results found for "'+query+'"</h1>');
      }
    });
  }

}

window.onload = function() {
  if(window.location.pathname == "/search_results.html") {
    var search_type = searchEngine.getQueryString('a')
    if(search_type == 1) {
      var queryString = searchEngine.getQueryString('query');
      setTimeout(function() {
        searchEngine.perform(queryString),
        500
      })
    }
    if(search_type == 2) {
      var queryString = searchEngine.getQueryString('tag',true);
      setTimeout(function() {
        searchEngine.perform(queryString),
        500
      })
    }
  }
}
