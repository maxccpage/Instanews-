var url="https://api.nytimes.com/svc/search/v2/articlesearch.json";url+="?"+$.param({"api-key":"c0cc4db94b8348c184393e9d70096e88"}),$.ajax({url:url,method:"GET"}).done(function(c){console.log(c)}).fail(function(c){throw c});