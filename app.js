

var converter = new showdown.Converter()

function loadMD(fileName, id) {
  var file = new XMLHttpRequest();
  file.open("GET", fileName, true);
  file.onreadystatechange = function() {
    if (file.readyState === 4) {  // Makes sure the document is ready to parse
    if (file.status === 200) {  // Makes sure it's found the file
      var text = file.responseText;
      var html = converter.makeHtml(text);
      $(id).html(html);
    }
    }
  }
  file.send();
}

function load() {
  loadMD("essay/Intro1.md", "#index1");
  loadMD("essay/Intro2.md", "#index2");
  loadMD("essay/BRI.md", "#bri");
  loadMD("essay/image_credits.md", "#image_credits")
  loadMD("essay/crit1.md", "#crit1")
  loadMD("essay/crit2.md", "#crit2")
  loadMD("essay/crit3.md", "#crit3")
  loadMD("essay/crit4.md", "#crit4")
  loadMD("essay/crit5.md", "#crit5")
}

window.onload = load();

$(function(){
  $("#header-placeholder").load("segments/header.html");
  $("#footer-placeholder").load("segments/footer.html");
});


