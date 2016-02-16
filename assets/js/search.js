var searchEngine = {
  post_list: $(".post-list"),

  index: lunr(function () {
    this.field('id');
    this.field('title', { boost: 10 });
    this.field('author');
    this.field('description');
    this.field('tags');
    this.field('url');
  }),

  data: $.getJSON('/search_data.json'),

  populate: function() {
    searchEngine.data.then(function(loaded_data){
      $.each(loaded_data, function(index, value){
        searchEngine.index.add(
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

  perform: function(query){
    var results = searchEngine.index.search(query);
    searchEngine.data.then(function(loaded_data){
      if(results.length) {
        searchEngine.post_list.empty();
        results.forEach(function(result) {
          var item = loaded_data[result.ref];
          var appendString = '<h1>Showing result for "'+query+'"</h1>'+
          '<article class="post">'+
          '<h1 class="title">' + item.title + '</h1>'+
          '<p class="description">' + item.description + '</p>'+
          '<a href="'+ item.url + '" class="link">Continue Reading</a>'+
          '</article>';
          searchEngine.post_list.append(appendString);
        });
      } else {
        searchEngine.post_list.html('<h1>No results found for "'+query+'"</h1>');
      }
    });
  }

}
$(window).bind("load", function() {
  var queryString = searchEngine.getQueryString('query');
  searchEngine.populate();
  searchEngine.perform(queryString);
});
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
