// Versão para Microsoft Excel

console.clear();
console.log("title;views;likes;shares");
$('div.article-details').each(function(){
  var article = $(this);
  var title  = article.find(".article-title").text();
  var views  = article.find(".social-view-count a span.count-container").text();
  var likes  = article.find(".social-gestures-likes a span.count-container").text();
  var shares  = article.find(".social-gestures-comments a span.count-container").text();
  console.log(title+";"+(parseFloat(views) || 0)+";"+(parseFloat(likes) || 0)+";"+(parseFloat(shares) || 0));
});

// Versão para a Planilha do Google Drive

console.clear();
console.log("title,views,likes,shares");
$('div.article-details').each(function(){
  var article = $(this);
  var title  = article.find(".article-title").text();
  var views  = article.find(".social-view-count a span.count-container").text();
  var likes  = article.find(".social-gestures-likes a span.count-container").text();
  var shares  = article.find(".social-gestures-comments a span.count-container").text();
  console.log(title+","+(parseFloat(views) || 0)+","+(parseFloat(likes) || 0)+","+(parseFloat(shares) || 0));
});