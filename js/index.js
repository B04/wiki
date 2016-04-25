
var getInfo = function(data) {
 
 var html = "";
 
 var markup = "<div class='results'><h3 class='title'>";
 
 var link = "<a target='_blank' style='text-decoration: none' href='http://en.wikipedia.org/?curid=";
   
 var results = data.query.pages;
 
 var keys = Object.keys(results);
  
 
 keys.forEach(function(key) {
    html += link + results[key].pageid + "'>" + markup + results[key].title + "</h3><p class='paragraph'>" + results[key].extract + "</div></a>";
  })
 

  $('#result').html(html);
};


var getSearch = function() {
 
  var search = $('#search').val();
  
  if (search == '') {
    $('#nosearch').html("Please enter something to search");
  }
  else {
    
    $('#nosearch').empty();
   
    var searchrep = search.split(" ").join("+");
    
   
    var url = "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exlimit=20&exintro=1&explaintext=1&gsrsearch=";
   
    var endurl = "&gsrprop=snippet&gsrlimit=10&callback=?";
   
    $.getJSON(url + searchrep + endurl, getInfo, 'jsonp');
    
  }
};


$(document).ready(function() {
  $('#button').click(getSearch);
})