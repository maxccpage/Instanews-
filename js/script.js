var imgUrl = '';
var title = '';
var linkUrl = '';

$(document).ready(function(){

	$('select').on('click',function(){ 
		$('.display').empty();
		var url = "https://api.nytimes.com/svc/topstories/v2/";
	url += $('select option:selected').text().toLowerCase();
	url += ".json";
	url += '?' + $.param({
	  'api-key': "c0cc4db94b8348c184393e9d70096e88"
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	for (var i=0; i < result.results.length; i++){
		if (result.results[i].multimedia.length != 0) {
			title = result.results[i].title;
			linkUrl = result.results[i].url;
			imgUrl = result.results[i].multimedia[result.results[i].multimedia.length-1].url;
			var article = $('<div class="article"><a href=' + linkUrl + '><p></p></a></div>');

			article.css({'background': 'url('+ imgUrl +') no-repeat center',
					  'background-size':'cover','border': 'none'});
			article.find('p').text(title);
			$('.display').append(article);
			}
};

}).fail(function(err) {
  throw err;
});

});
});









