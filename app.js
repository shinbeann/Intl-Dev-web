const button = document. querySelector('button');
button. addEventListener('click', function() {
console. log('Button was clicked');
});

function load() {
    var file = new XMLHttpRequest();
    file.open("GET", "CocaSinclair.txt", true);
    file.onreadystatechange = function() {
      if (file.readyState === 4) {  // Makes sure the document is ready to parse
        if (file.status === 200) {  // Makes sure it's found the file
          text = file.responseText;
          document.getElementById("Section0").innerHTML = text;
        }
      }
    }
}

window.onLoad = load();