(function () {
  var elVersionHeaders = document.querySelectorAll("#page-content h2");
  var elVersionContents = document.querySelectorAll("#page-content ul");
  var len = elVersionHeaders.length;

  elVersionHeaders[0].className = "expanded";
  elVersionContents[0].className = "expanded";
  elVersionContents[len - 1].className = "expanded";
  elVersionContents[len - 1].className = "expanded";

  for (var i = 0; i < len; i++) {
    elVersionHeaders[i].onclick = (function (i) {
      return function (event) {
        elVersionHeaders[i].className = elVersionHeaders[i].className === "expanded" ? "" : "expanded";
        elVersionContents[i].className = elVersionContents[i].className === "expanded" ? "" : "expanded";
      };
    })(i);
  }
})();
