// const button = document. querySelector('button');
// button. addEventListener('click', function() {
// console. log('Button was clicked');
// });

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
  loadMD("essay/Criticism.md", "#criticism");
}

window.onload = load();

$(function(){
  $("#header-placeholder").load("segments/header.html");
  $("#footer-placeholder").load("segments/footer.html");
});



// function load() {
//     var file = new XMLHttpRequest();
//     file.open("GET", "CocaSinclair.txt", true);
//     file.onreadystatechange = function() {
//       if (file.readyState === 4) {  // Makes sure the document is ready to parse
//         if (file.status === 200) {  // Makes sure it's found the file
//           text = file.responseText;
//           document.getElementById("Section0").innerHTML = text;
//         }
//       }
//     }
// }

// window.onLoad = load();