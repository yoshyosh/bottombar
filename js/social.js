$(document).ready(function(){
  var Url = window.location.href;
  var UrlEncoded = encodeURIComponent(Url);
  var title = encodeURIComponent(document.getElementById("title").innerText);
  document.getElementById("fb-share").href="http://www.facebook.com/share.php?u=" + UrlEncoded;
  document.getElementById("tweet").href="http://twitter.com/home?status=" + title + " " + UrlEncoded;
  document.getElementById("linkedin").href="http://www.linkedin.com/shareArticle?mini=true&url=" + UrlEncoded + "&title=" + title;
});