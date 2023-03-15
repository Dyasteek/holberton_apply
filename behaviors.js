document.addEventListener("DOMContentLoaded", function(event) {

});

var thumbnailElement = document.getElementById("smart_thumbnail");
thumbnailElement.addEventListener("click", function() {
    alert("Is my favourite car! Dont touch this!");
    var thumbnailElement = document.getElementById("smart_thumbnail");
        thumbnailElement.className = "smart";
    if (thumbnailElement.className = "") {
        thumbnailElement.className = "small"
    }
  });

(function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://about-andy-1.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();