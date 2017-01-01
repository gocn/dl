(function () {
  var elHeaders = document.querySelectorAll(".page-content h2");
  var elContents = document.querySelectorAll(".page-content ul");
  var len = elHeaders.length;

  console.log(elHeaders, elContents);

  elHeaders[0].className = "expanded";
  elContents[0].className = "expanded";
  elContents[len - 1].className = "expanded";
  elContents[len - 1].className = "expanded";

  for (var i = 0; i < len; i++) {

    if (window.pageId === "editor") {
      elHeaders[i].className = "expanded";
      elContents[i].className = "expanded";
    }

    elHeaders[i].onclick = (function (i) {
      return function (event) {
        elHeaders[i].className = elHeaders[i].className === "expanded" ? "" : "expanded";
        elContents[i].className = elContents[i].className === "expanded" ? "" : "expanded";
      };
    })(i);
  }
})();
