// const button = document. querySelector('button');
// button. addEventListener('click', function() {
// console. log('Button was clicked');
// });

var converter = new showdown.Converter()

function load() {
  var file = new XMLHttpRequest();
  file.open("GET", "essay/CocaSinclair.md", true);
  file.onreadystatechange = function() {
    if (file.readyState === 4) {  // Makes sure the document is ready to parse
    if (file.status === 200) {  // Makes sure it's found the file
      var text = file.responseText;
      var html = converter.makeHtml(text);
      $("#section1").html(html);
    }
    }
  }
  file.send();
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